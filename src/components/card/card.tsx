import { Product } from "../../interfaces/interfaces";
import "./style.sass";

export default function ProductCard({ products }: { products: Product[] }) {
  return (
    <div className="products-wapper">
      {products.map((product: Product) => (
        <div className="card">
          <img className="card-img" src={product.image} alt={product.title} />
          <div className="card-body">
            <h2 className="card-title">{product.title}</h2>
            <p className="card-category">{product.category}</p>
            <p className="card-description">{product.description}</p>
            <p className="card-price">${product.price.toFixed(2)}</p>
            <div className="card-rating">
              <p className="card-rating-rate">{product.rating.rate}</p>
              <p className="card-rating-count">
                ({product.rating.count} ratings)
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
