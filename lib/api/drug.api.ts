import {Drug} from '../models';
import {ApiProviderImpl} from './impl';

export class DrugApi extends ApiProviderImpl<Drug> {
  protected apiPath: string = '/api/inventory/drugs/';
}
