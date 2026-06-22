export interface OrderResponse {
  status: boolean;
  message: string;
  data: OrderType[];
}

export interface OrderType {
  id: string;
  userId: string;
  totalAmount: string;
  status: string;
  paymentMethod: string;
  paymentStatus: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  state: string;
  postalCode: string;
  country: string;
  createdAt: string;
  updatedAt: string;
  user?: OrderUser;
  items: OrderItem[];
}

export interface OrderUser {
  name: string;
  email: string;
}

export interface OrderItem {
  quantity: number;
  product: Product;
  orders: OrderSummary;
}

export interface Product {
  id: string;
  name: string;
  price: string | number;
  description: string;
  images: string[];
  imagesUrl: string[];
}

export interface OrderSummary {
  id: string;
  totalAmount: string;
  paymentMethod: string;
  paymentStatus: string;
  status: string;
}
