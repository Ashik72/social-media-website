import React from "react";
import { Outlet } from "react-router-dom";

import ProfileBanner from "../../pages/Profile/ProfileBanner/ProfileBanner";

export default function ProfileLayout() {
  return (
    <div className="p-10 mb-96">
      <ProfileBanner></ProfileBanner>
      <Outlet></Outlet>
    </div>
  );
}
