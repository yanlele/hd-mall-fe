export interface CategoryItem {
  id: number;
  name: string;
  type?: number;
  parent_id?: number;
  avatar?: string;
  children: CategoryItem[];
}

export interface CreateCategoryRequestParams {
  name: string;
  avatar?: string;
}
