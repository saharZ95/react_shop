import "./Products.css";
const Products = () => {
  const products = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const newProducts = products.map(() => (
    <div class="product-card">
      <div class="product-image">
        <img src="https://cdn.shopify.com/s/files/1/0938/8938/products/10231100205_1_1315x1800_300_CMYK_1024x1024.jpeg?v=1445623369" />
      </div>
      <div class="product-info">
        <h5>Winter Jacket</h5>
        <h6>$99.99</h6>
      </div>
    </div>
  ));
  return <section className="products">{newProducts}</section>;
};
export default Products;
