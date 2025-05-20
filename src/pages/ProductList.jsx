import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function ProductList() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const fetchData = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch(`https://dummyjson.com/products/${id}`);
      if (!res.ok) {
        throw new Error("Failed to fetch product");
      }
      const data = await res.json();
      setProduct(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchData();
  }, [id]);
  if (loading) {
    return <div className="text-center mt-10 animate-bounce">Loading...</div>;
  }
  if (error) {
    return (
      <div className="text-center mt-10 text-red-500">
        Error: {error}
        <div>
          <button
            className="btn btn-secondary mt-4"
            onClick={() => navigate("/products")}
          >
            Back to products
          </button>
        </div>
      </div>
    );
  }
  return (
    <div className="card bg-base-200 w-110 shadow-sm mx-auto mt-10 px-2">
      <figure>
        <img src={product.images} alt={product.title} />
      </figure>
      <hr />
      <div className="card-body">
        <h2 className="card-title">{product.title}</h2>
        <p>{product.description}</p>
        <div className="card-actions justify-end">
          <button
            onClick={() => {
              navigate(`/shop/${product.category}`);
            }}
            className="btn btn-primary"
          >
            back to {product.category} category
          </button>
          <button
            onClick={() => {
              navigate("/products");
            }}
            className="btn btn-primary"
          >
            Back to product
          </button>
        </div>
      </div>
    </div>
  );
}
