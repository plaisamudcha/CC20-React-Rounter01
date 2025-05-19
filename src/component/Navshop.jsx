import { useEffect } from "react";
import { Link } from "react-router";

export default function Navshop(props) {
  const { fetchData, products } = props;
  const category = products.reduce((prev, curr) => {
    if (!prev.includes(curr.category)) {
      prev.push(curr.category);
    }
    return prev;
  }, []);
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="flex justify-evenly mt-5">
      {category.map((el, index) => (
        <Link to={el} className="btn" key={index}>
          {el}
        </Link>
      ))}
    </div>
  );
}
