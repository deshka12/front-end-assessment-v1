import products from "../mocks/products";
class ProductApi {
  getProducts() {
    return products;
  }
  deleteProduct(productId) {
    return products.filter((product) => product.id !== productId);
  }
  // addProduct(product) {
  //   return products.push(product);
  // }
  // updateProduct({ productId, productData }) {
  //   return products.push(product);
  // }
}

export const productApi = new ProductApi();
