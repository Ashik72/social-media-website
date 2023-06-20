import React from "react";
import { Outlet } from "react-router-dom";

import ProfileBanner from "../../pages/Profile/ProfileBanner/ProfileBanner";

export default function ProfileLayout() {
  return (
    <div className="mb-16">
      <ProfileBanner></ProfileBanner>
      <Outlet></Outlet>
    </div>
  );
}
