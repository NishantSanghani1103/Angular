export interface ProductResponse {
  products: ProductType[];
  total: number;
  skip: number;
  limit: number;
}
export interface ProductType {
  id: number;
  title: string;
  description: string;
  category: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  tags: string[];
  brand: string;
  sku: string;
  weight: number;
  dimensions: object;
  warrantyInformation: string;
  shippingInformation: string;
  availabilityStatus: string;
  reviews: [];
  returnPolicy: string;
  minimumOrderQuantity: number;
  meta: object;
  images: string[];
  thumbnail: string;
}
