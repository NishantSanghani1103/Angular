export interface brandsApiResponse {
  status: number;
  message: string;
  data: Brands[];
}
export interface Brands {
  id: number;
  name: string;
  slug: string;
}
