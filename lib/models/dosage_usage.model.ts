export const DosageStatus = {
  TAKEN: 'Taken',
  PENDING: 'Pending',
  OVERDUE: 'Overdue',
};

export type DosageUsage = {
  id: number;
  time: string;
  status: keyof typeof DosageStatus;
};
