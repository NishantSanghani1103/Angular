export interface categoryApiResponse {
  status: number;
  message: string;
  data: Category[];
}
export interface Category {
  id: number;
  name: string;
  slug: string;
}
