import type {Prescription} from '../models';
import {ApiProviderImpl} from './impl';

export class PrescriptionApi extends ApiProviderImpl<Prescription> {
  protected apiPath: string = '/api/tracker/prescriptions/';
}
