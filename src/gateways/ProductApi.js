import products from "../mocks/products";
class ProductApi {
  getProducts() {
    return products;
  }
  deleteProduct(productId) {
    return products.filter((product) => product.id !== productId);
  }
}

export const productApi = new ProductApi();
