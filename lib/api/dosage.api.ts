import type {Dosage} from '../models';
import {ApiProviderImpl} from './impl';

export class DosageApi extends ApiProviderImpl<Dosage> {
  protected apiPath: string = '/api/tracker/dosages/';
}
