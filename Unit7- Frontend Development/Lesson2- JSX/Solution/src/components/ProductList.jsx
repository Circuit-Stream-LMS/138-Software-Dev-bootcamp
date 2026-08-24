import ProductCard from "./ProductCard";

// Hardcoded product data for this exercise
const products = [
  {
    id: 1,
    name: "Wireless Headphones",
    image: "https://placehold.co/200x200",
    price: "$49.99",
    description: "Comfortable over-ear headphones with noise cancellation.",
  },
  {
    id: 2,
    name: "Smart Watch",
    image: "https://placehold.co/200x200",
    price: "$99.99",
    description: "Track your fitness and notifications on the go.",
  },
  {
    id: 3,
    name: "Bluetooth Speaker",
    image: "https://placehold.co/200x200",
    price: "$29.99",
    description: "Portable speaker with rich, deep sound.",
  },
];

const ProductList = () => {
  return (
    <div className="product-list">
      {products.map((product) => (
        // key lets React tell each ProductCard apart in the list
        <ProductCard
          key={product.id}
          product={product}
        />
      ))}
    </div>
  );
};

export default ProductList;
