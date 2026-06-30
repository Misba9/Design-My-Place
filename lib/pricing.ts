export type PriceTier = {
  title: string;
  amount: string;
  unit: string;
  description: string;
};

export const priceListSection = {
  label: 'Price List',
  title: 'Transparent',
  titleAccent: 'pricing',
  intro:
    'We offer flexible fee structures — hourly, per square foot, or as a percentage of project budget — discussed openly during your consultation.',
} as const;

export const priceList: PriceTier[] = [
  {
    title: 'Hourly',
    amount: 'INR 3,000',
    unit: 'per hour',
    description:
      'The client will pay the designer a competitive rate for each hour worked on the project.',
  },
  {
    title: 'Square Footage',
    amount: 'INR 350',
    unit: 'per sq. ft.',
    description:
      'More commonly, for commercial spaces or new construction, clients pay per square foot.',
  },
  {
    title: 'Designer Fee',
    amount: '15%',
    unit: 'of project budget',
    description:
      'If the budget is established initially, designer fees are paid at an agreed percentage of the budget.',
  },
];
