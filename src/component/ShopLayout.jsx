import { Outlet } from "react-router";
import Navshop from "./Navshop";

export default function ShopLayout(props) {
  const { fetchData, products } = props;
  return (
    <div>
      <Navshop fetchData={fetchData} products={products} />
      <Outlet />
    </div>
  );
}
