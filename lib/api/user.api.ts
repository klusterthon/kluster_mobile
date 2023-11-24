import type {User} from '../models';
import {ApiImpl, type TApiPatchOption} from './impl';

export class UserApi extends ApiImpl {
  protected apiPath: string = '/api/account/users/';

  getCurrentUser() {
    return this.get<User>({
      path: 'current-users',
    });
  }

  updateCurrentUser(options: Pick<TApiPatchOption, 'data'>) {
    return this.patch<User>({
      data: options.data,
      path: 'current-users',
    });
  }

  deleteUser(id: number) {
    return this.delete<null>({
      path: id,
    });
  }
}
