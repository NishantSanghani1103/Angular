export const API_ROUTES = {
  products: {
    base: 'products',
    getById: (id: string | null) => `products/${id}`,
    delete: (id: string | number) => `products/${id}`,
    update: (id: string | null) => `products/${id}`,
  },
};
