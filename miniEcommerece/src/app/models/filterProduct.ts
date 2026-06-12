export interface ProductFiltersType {
  categories: string[];
  brands: string[];
  price_from: number;
  price_to: number |null;
  rating: number;
  sort: string;
  page: number;
  search: string;
}
