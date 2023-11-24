import type {DosageUsage} from '../models';
import {ApiProviderImpl} from './impl';

export class DosageUsageApi extends ApiProviderImpl<DosageUsage> {
  protected apiPath: string = '/api/tracker/usages/';
}
