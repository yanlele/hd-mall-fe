export interface GetProductListRequestParams {
  category_id: number;
  page?: number;
  page_size?: number;
}

export interface ProductDetail {
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

export interface StaticImage {
  id: number;
  product_id: number;
  type: number;
  file_name: string;
  url: string;
  link: string;
}
