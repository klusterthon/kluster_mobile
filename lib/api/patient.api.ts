import type {Patient} from '../models';
import {ApiProviderImpl} from './impl';

export class PatientApi extends ApiProviderImpl<Patient> {
  protected apiPath: string = '/api/account/patients/';
}
