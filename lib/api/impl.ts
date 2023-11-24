import type {AxiosInstance} from 'axios';

import type {Paginate} from '../models';

export type TApiOption = {
  url?: string;
  path?: string | number;
  query?: Record<string, any>;
};

export type TApiPostOption = {
  data: Record<string, any>;
} & TApiOption;

export type TApiPatchOption = {
  path: string | number;
  data: Record<string, any>;
} & Omit<TApiOption, 'path'>;

export type TApiDeleteOption = {
  path: string | number;
} & Omit<TApiOption, 'path'>;

export type TApiMultipartOption = {
  method: 'POST' | 'PATCH';
  data: FormData;
} & TApiOption;

export abstract class ApiImpl {
  protected abstract apiPath: string;

  constructor(private axios: AxiosInstance) {}

  protected get<T>(options?: TApiOption) {
    return this.axios.get<T>(
      options?.url ??
        this.buildPathWithQuery(
          options?.path ? this.getDetailedUrl(options.path) : this.apiPath,
          options?.query,
        ),
    );
  }

  protected post<T>(options: TApiPostOption) {
    return this.axios.post<T>(
      options?.url ??
        this.buildPathWithQuery(
          options?.path ? this.getDetailedUrl(options.path) : this.apiPath,
          options?.query,
        ),
      options.data,
    );
  }

  protected patch<T>(options: TApiPatchOption) {
    return this.axios.patch<T>(
      options.url ??
        this.buildPathWithQuery(
          this.getDetailedUrl(options.path),
          options.query,
        ),
      options.data,
    );
  }

  protected delete<T>(options: TApiDeleteOption) {
    return this.axios.delete<T>(
      options.url ??
        this.buildPathWithQuery(
          this.getDetailedUrl(options.path),
          options.query,
        ),
    );
  }

  protected multipartRequest<T>(options?: TApiMultipartOption) {
    return this.axios.request<T>({
      method: options?.method,
      url:
        options?.url ??
        this.buildPathWithQuery(
          options?.path ? this.getDetailedUrl(options.path) : this.apiPath,
          options?.query,
        ),
      data: options?.data,
    });
  }

  protected getDetailedUrl(path: any) {
    return this.apiPath + path + '/';
  }

  private buildPathWithQuery(path: string, parameters?: Record<string, any>) {
    if (parameters) {
      const searchParams = new URLSearchParams(parameters);
      return `${path}?${searchParams.toString()}`;
    }

    return path;
  }

  protected recordToFormData(record: Record<string, string>) {
    const formData = new FormData();

    for (const [key, value] of Object.entries(record)) {
      formData.append(key, value);
    }

    return formData;
  }
}

export abstract class ApiProviderImpl<T> extends ApiImpl {
  list(options?: Pick<TApiOption, 'query' | 'url'>) {
    return this.get<Paginate<T>>(options);
  }

  create(options: Pick<TApiPostOption, 'path' | 'data'>) {
    return this.post<T>(options);
  }

  update(options: Pick<TApiPatchOption, 'path' | 'data'>) {
    return this.patch<T>(options);
  }

  remove(options: Pick<TApiDeleteOption, 'path'>) {
    return this.delete<void>(options);
  }
}
