// Displays one product using the props passed down from ProductList
const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} className="product-image" />
      <h3>{product.name}</h3>
      <p className="product-price">{product.price}</p>
      <p className="product-description">{product.description}</p>
    </div>
  );
};

export default ProductCard;
