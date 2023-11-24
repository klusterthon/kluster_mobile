import type Drug from './drug.model';

export const DosageForm = {
  GRAM: 'Gram',
  PILLS: 'Pills',
  DROPS: 'Drops',
  CAPSULE: 'Capsule',
  MILLIGRAM: 'Milligram',
};

export const DosageInterval = {
  DAILY: 'Daily',
  CYCLIC: 'Cyclic',
  WEEKLY: 'Weekly',
  INTERVAL: 'Interval',
  SPECIFIC: 'Specific',
};

export type Dosage = {
  id: number;
  drug: Drug;
  count: number;
  quantity: number;
  start_date: number;
  end_date?: number;
  form: keyof typeof DosageForm;
  Interval: keyof typeof DosageInterval;

  has_reminder: boolean;
  is_infinite_dosage: boolean;
  is_dosage_complete: boolean;
};
