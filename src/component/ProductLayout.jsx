import { Outlet } from "react-router";
export default function () {
  return (
    <div>
      <h1 className="text-3xl text-center mt-3">Product Viewer</h1>
      <Outlet />
    </div>
  );
}
