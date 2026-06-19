export interface CartItemType {
  id: string;
  cartId: string;
  productId: string;
  quantity: number;
  productPrice: string;
  createdAt: string;
  updatedAt: string;
  product: CartProduct;
}
export interface CartProduct {
  id: string;
  name: string;
  slug: string;
  imagesUrl: string[];
  images: string[];
}