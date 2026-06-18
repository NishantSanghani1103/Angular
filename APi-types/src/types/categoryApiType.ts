export interface CategoriesResponse {
  status: number;
  message: string;
  data: Category[];
}
export interface Category {
  id: string;
  name: string;
  slug: string;
}
