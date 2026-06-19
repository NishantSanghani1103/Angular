// export interface ProductApiResponse {
//   status: number;
//   message: string;
//   data: Product[];
//   current_page: number;
//   limit: number;
//   total_pages: number;
//   total_records: number;
// }
// export interface Product {
//   id: string;
//   name: string;
//   slug: string;
//   description: string;
//   price: string;
//   discount_percentage: string;
//   rating: string;
//   stock: string;
//   brand_id: string;
//   category_id: string;
//   image: string;
//   brand_name: string;
//   category_name: string;
//   brand_slug: string;
//   category_slug: string;
//   multiple_images: string[];
// }



export interface ProductResponse {
  status: boolean;
  message: string;
  count: number;
  totalRecords: number;
  data: Product[];
}

export interface Product {
  imagesUrl: string[];
  id: string;
  name: string;
  slug: string;
  price: string;
  stock: number;
  categoryId: string;
  description: string;
  images: string[];
  createdAt: string;
  updatedAt: string;
  category: Category;
}

export interface Category {
  id: string;
  name: string;
}