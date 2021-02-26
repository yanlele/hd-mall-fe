interface CategoryBase {
  avatar: string;
  id: number;
  name: string;
  parent_id: number;
  type: number;
}

export interface ProductItem {
  id: number;
  category_id: number;
  name: string;
  title: string;
  desc: string;
  original_cost: number;
  price: number;
  inventory: number;
  primary_image: string;
  sales: number;
  params: string;
  tag: string;
  status: number;
}

export interface CategoryItem extends CategoryBase {
  children?: CategoryItem[];
}

export interface PrimaryCategory extends CategoryBase {
  product_list: ProductItem[];
}
