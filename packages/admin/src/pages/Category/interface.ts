import { SetterOrUpdater } from 'recoil';

export interface HandleGetCategoryListAsyncHelperOptions<T> {
  setState: SetterOrUpdater<Partial<T>>;
}
