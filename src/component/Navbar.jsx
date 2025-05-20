import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="navbar bg-base-100 shadow-sm gap-2.5 bg-info-content">
      <NavLink to="/" className="btn btn-ghost text-xl">
        News
      </NavLink>
      <NavLink to="subscribes" className="btn btn-ghost text-xl">
        Subscribes
      </NavLink>
      <NavLink to="products" className="btn btn-ghost text-xl">
        Products
      </NavLink>
      <NavLink to="shop" className="btn btn-ghost text-xl">
        Shop Category
      </NavLink>
    </div>
  );
}
