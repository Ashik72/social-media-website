import React from "react";
import { Outlet } from "react-router-dom";
import Navber from "../../components/Navbar/Navber";

export default function Main() {
  return (
    <div>
      <Navber></Navber>
      <Outlet></Outlet>
    </div>
  );
}
