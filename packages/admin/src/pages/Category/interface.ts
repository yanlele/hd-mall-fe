import { SetterOrUpdater } from 'recoil';

export interface HandleGetCategoryListAsyncHelperOptions<T> {
  state: T;
  setState: SetterOrUpdater<T>;
}
