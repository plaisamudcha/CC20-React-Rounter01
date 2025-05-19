import { useParams, Link } from "react-router";

export default function ShopCategory(props) {
  const { fetchData, products } = props;
  const { category } = useParams();
  //   console.log(products);
  const productCate = products.filter((el) => category === el.category);
  console.log(productCate);
  return (
    <div className="flex flex-col gap-2 mt-5">
      {productCate.map((el, index) => (
        <Link
          to={`/products/${el.id}`}
          className="hover:not-focus:bg-accent-content"
          key={index}
        >
          {el.id} {el.title}
        </Link>
      ))}
    </div>
  );
}
