import { BrowserRouter, Routes, Route } from "react-router";
import { useState } from "react";
import News from "../pages/News";
import Subscribes from "../pages/Subscribes";
import Success from "../pages/Success";
import NotFound from "../pages/NotFound";
import Layout from "../component/Layout";
import ProductLayout from "../component/ProductLayout";
import Products from "../pages/Products";
import ProductList from "../pages/ProductList";
import ShopLayout from "../component/ShopLayout";
import ShopCategory from "../pages/ShopCategory";

export default function AppRouter() {
  const [products, setProducts] = useState([]);
  const fetchData = () => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data.products));
  };
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<News />} />
          <Route path="/subscribes" element={<Subscribes />} />
          <Route path="/success/:email" element={<Success />} />
          <Route path="*" element={<NotFound />} />

          <Route path="/products" element={<ProductLayout />}>
            <Route
              index
              element={<Products fetchData={fetchData} products={products} />}
            />
            <Route path=":id" element={<ProductList />} />
          </Route>

          <Route
            path="/shop"
            element={<ShopLayout fetchData={fetchData} products={products} />}
          >
            <Route
              path=":category"
              element={
                <ShopCategory fetchData={fetchData} products={products} />
              }
            />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
