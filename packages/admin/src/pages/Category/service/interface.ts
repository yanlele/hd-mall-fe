export interface CategoryItem {
  id: number;
  name: string;
  type?: number;
  parent_id?: number;
  avatar?: string;
  children: CategoryItem[];
}

export interface CreateCategoryRequestParams {
  id?: number;
  name: string;
  avatar?: string;
  parent_id?: number;
  type?: number;
  banner_image?: string;
  banner_link?: string;
}
