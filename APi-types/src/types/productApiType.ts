export interface productApiResType {
  status: number;
  message: string;
  data: Product[];
  current_page: number;
  limit: number;
}
export interface Product {
  id: string;
  name: string;
  slug: string;
  description: string;

  price: string;
  stock: string;
  rating: string;
  discount_percentage: string;

  image: string;
  multiple_images: string[];

  brand_id: string;
  brand_name: string;
  brand_slug: string;

  category_id: string;
  category_name: string;
  category_slug: string;
}
