type AnalyticsEvent =
  | 'phone_click'
  | 'whatsapp_click'
  | 'consultation_click'
  | 'get_in_touch_click'
  | 'project_view'
  | 'scroll_depth'
  | 'form_submit'
  | 'contact_form_submit'
  | 'lead_form_submit'
  | 'cta_click';

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: Record<string, unknown>[];
    fbq?: (...args: unknown[]) => void;
    clarity?: (...args: unknown[]) => void;
  }
}

export function trackEvent(event: AnalyticsEvent, params?: Record<string, string | number>) {
  if (typeof window === 'undefined') return;

  const payload = { event, ...params };

  window.dataLayer?.push(payload);

  window.gtag?.('event', event, params);

  if (
    event === 'phone_click' ||
    event === 'whatsapp_click' ||
    event === 'consultation_click' ||
    event === 'get_in_touch_click' ||
    event === 'contact_form_submit' ||
    event === 'lead_form_submit'
  ) {
    window.fbq?.('trackCustom', event, params);
  }
}

export function trackProjectView(slug: string, name: string) {
  trackEvent('project_view', { project_slug: slug, project_name: name });
}

export function trackScrollDepth(percent: number) {
  trackEvent('scroll_depth', { percent });
}

export function trackPhoneClick(source: string) {
  trackEvent('phone_click', { source });
}

export function trackWhatsAppClick(source: string) {
  trackEvent('whatsapp_click', { source });
}

export function trackConsultationClick(source: string) {
  trackEvent('consultation_click', { source });
}

export function trackContactFormSubmit(source: string) {
  trackEvent('contact_form_submit', { source });
  trackEvent('form_submit', { source, form_name: 'contact_form' });
}

export function trackLeadFormSubmit(source: string) {
  trackEvent('lead_form_submit', { source });
  trackEvent('form_submit', { source, form_name: 'lead_form' });
}

export function trackGetInTouchClick(source: string) {
  trackEvent('get_in_touch_click', { source });
}
