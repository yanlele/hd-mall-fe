export interface CategoryItem {
  avatar: string;
  id: number;
  name: string;
  parent_id: number;
  type: number;
  children?: CategoryItem[];
}
