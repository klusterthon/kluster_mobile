import type {Dosage} from './dosage.model';
import type {Personnel} from './personnel.model';

export type Prescription = {
  id: number;
  dosage: Dosage;
  notes?: string;
  instructions?: string;
  personnel?: Personnel;
};
