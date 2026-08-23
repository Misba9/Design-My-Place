'use client';

import { useEffect } from 'react';

// ─────────────────────────────────────────────
// Config
// ─────────────────────────────────────────────
const WEB3FORMS_ACCESS_KEY = 'cb6a84b8-1c02-44f5-a6dd-d45c5655b45f';
const WEB3FORMS_ENDPOINT = 'https://api.web3forms.com/submit';

/** UTM / Meta Ads params we capture and forward with every submission. */
const TRACKING_PARAMS = [
  'utm_source',
  'utm_medium',
  'utm_campaign',
  'utm_content',
  'utm_term',
  'fbclid', // Facebook click ID — appended automatically by Meta to every ad click
] as const;

type TrackingParam = (typeof TRACKING_PARAMS)[number];

const SESSION_KEY = 'dmp_tracking';

// ─────────────────────────────────────────────
// Helpers
// ─────────────────────────────────────────────

/** Read tracking params from URL search string. */
function parseTrackingFromUrl(): Partial<Record<TrackingParam, string>> {
  if (typeof window === 'undefined') return {};
  const params = new URLSearchParams(window.location.search);
  const result: Partial<Record<TrackingParam, string>> = {};
  for (const key of TRACKING_PARAMS) {
    const value = params.get(key);
    if (value) result[key] = value;
  }
  return result;
}

/** Persist tracking params to sessionStorage (survives soft navigations). */
function saveTracking(data: Partial<Record<TrackingParam, string>>) {
  try {
    const existing = loadTracking();
    // Only overwrite if we have new values (first touch wins within session)
    const merged = { ...data, ...existing };
    if (Object.keys(merged).length) {
      sessionStorage.setItem(SESSION_KEY, JSON.stringify(merged));
    }
  } catch {
    // sessionStorage may be blocked in some browsers
  }
}

/** Load tracking params from sessionStorage. */
function loadTracking(): Partial<Record<TrackingParam, string>> {
  try {
    const raw = sessionStorage.getItem(SESSION_KEY);
    return raw ? (JSON.parse(raw) as Partial<Record<TrackingParam, string>>) : {};
  } catch {
    return {};
  }
}

/**
 * Derive a human-readable Meta Ads label for the Web3Forms submission.
 * Shown in the dashboard / email as "Lead Source".
 */
function buildMetaAdsLabel(tracking: Partial<Record<TrackingParam, string>>): string {
  const { utm_source, utm_medium, utm_campaign, fbclid } = tracking;

  if (fbclid || utm_source?.toLowerCase().includes('facebook') || utm_source?.toLowerCase() === 'fb') {
    const parts = ['Meta Ads'];
    if (utm_medium) parts.push(utm_medium);
    if (utm_campaign) parts.push(utm_campaign);
    return parts.join(' › ');
  }

  if (utm_source) {
    const parts = [utm_source];
    if (utm_medium) parts.push(utm_medium);
    if (utm_campaign) parts.push(utm_campaign);
    return parts.join(' › ');
  }

  return 'Organic / Direct';
}

// ─────────────────────────────────────────────
// Public API
// ─────────────────────────────────────────────

export interface Web3FormOptions {
  /** Email subject line shown in Web3Forms dashboard / inbox. */
  subject: string;
}

export interface Web3FormResult {
  success: boolean;
  message: string;
}

/**
 * useWeb3Form — captures Meta Ads / UTM tracking from the URL on mount,
 * persists it to sessionStorage, and provides a `submitForm` helper that
 * appends tracking hidden fields + the Web3Forms access key to any FormData
 * before POSTing.
 *
 * Usage:
 * ```tsx
 * const { submitForm } = useWeb3Form({ subject: 'New Inquiry' });
 *
 * const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
 *   e.preventDefault();
 *   const result = await submitForm(new FormData(e.currentTarget));
 *   if (result.success) { ... }
 * };
 * ```
 */
export function useWeb3Form({ subject }: Web3FormOptions) {
  // Capture and persist tracking params whenever the URL contains them
  useEffect(() => {
    const fromUrl = parseTrackingFromUrl();
    if (Object.keys(fromUrl).length > 0) {
      saveTracking(fromUrl);
    }
  }, []);

  /**
   * Submit a form's data to Web3Forms.
   * Automatically appends access_key, subject, and all tracking fields.
   */
  const submitForm = async (formData: FormData): Promise<Web3FormResult> => {
    // Load the best-available tracking data (URL takes precedence, fallback to session)
    const tracking = { ...loadTracking(), ...parseTrackingFromUrl() };

    // Core Web3Forms fields
    formData.append('access_key', WEB3FORMS_ACCESS_KEY);
    formData.append('subject', subject);

    // Meta Ads / UTM hidden fields
    formData.append('lead_source_label', buildMetaAdsLabel(tracking));
    if (tracking.utm_source) formData.append('source', tracking.utm_source);
    if (tracking.utm_medium) formData.append('medium', tracking.utm_medium);
    if (tracking.utm_campaign) formData.append('campaign', tracking.utm_campaign);
    if (tracking.utm_content) formData.append('ad_content', tracking.utm_content);
    if (tracking.utm_term) formData.append('keyword', tracking.utm_term);
    if (tracking.fbclid) formData.append('fbclid', tracking.fbclid);

    // Page context
    formData.append('page_url', typeof window !== 'undefined' ? window.location.href : '');
    formData.append('referrer', typeof document !== 'undefined' ? document.referrer : '');

    try {
      const response = await fetch(WEB3FORMS_ENDPOINT, {
        method: 'POST',
        body: formData,
      });
      const data = (await response.json()) as { success: boolean; message?: string };
      return {
        success: data.success,
        message: data.message ?? (data.success ? 'Success' : 'Something went wrong'),
      };
    } catch (err) {
      console.error('[Web3Forms] Submission error:', err);
      return {
        success: false,
        message: 'Network error. Please try again or contact us directly.',
      };
    }
  };

  return { submitForm };
}
