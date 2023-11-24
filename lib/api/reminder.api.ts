import type {Reminder} from '../models';
import {ApiProviderImpl} from './impl';

export class ReminderApi extends ApiProviderImpl<Reminder> {
  protected apiPath: string = '/api/tracker/reminders/';
}
