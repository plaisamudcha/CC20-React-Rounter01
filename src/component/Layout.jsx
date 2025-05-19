import Navbar from "../component/Navbar";
import { Outlet } from "react-router";

export default function Layout() {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
}
