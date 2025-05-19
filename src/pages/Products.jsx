import { useEffect, useState } from "react";
import { Link } from "react-router";

export default function products(props) {
  const { fetchData, products } = props;
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="flex flex-col">
      {products.map((el, index) => (
        <Link
          to={`${el.id}`}
          className="hover:not-focus:bg-accent-content"
          key={index}
        >
          {el.id}. {el.title}
        </Link>
      ))}
    </div>
  );
}
