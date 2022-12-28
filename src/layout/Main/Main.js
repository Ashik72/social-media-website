import React from "react";
import { Outlet } from "react-router-dom";
import Navber from "../../components/Navbar/Navber";
import ProfileLayout from "../ProfileLayout";

export default function Main() {
  return (
    <div>
      <Navber></Navber>
      <ProfileLayout>
        <Outlet></Outlet>
      </ProfileLayout>
    </div>
  );
}
