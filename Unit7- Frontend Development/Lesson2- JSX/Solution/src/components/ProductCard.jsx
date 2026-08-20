// Displays one product using the props passed down from ProductList
const ProductCard = ({ name, image, price, description }) => {
  return (
    <div className="product-card">
      <img src={image} alt={name} className="product-image" />
      <h3>{name}</h3>
      <p className="product-price">{price}</p>
      <p className="product-description">{description}</p>
    </div>
  );
};

export default ProductCard;
