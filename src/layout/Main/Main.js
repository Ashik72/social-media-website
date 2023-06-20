import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import Navber from "../../components/Navbar/Navber";
import LeftRightLayout from "../LeftRightLayout";

export default function Main() {
  return (
    <div>
      <Navber></Navber>
      <LeftRightLayout>
        <Outlet></Outlet>
      </LeftRightLayout>
      {/* <Footer></Footer> */}
    </div>
  );
}
