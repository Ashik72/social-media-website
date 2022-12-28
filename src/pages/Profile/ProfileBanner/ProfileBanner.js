import React, { useContext } from "react";
import { authContext } from "../../../context/UserContext/UserContext";
import "./ProfileBanner.css";

export default function ProfileBanner() {
  const { user } = useContext(authContext);
  return (
    <div>
      <div className="bg-white rounded">
        <div className="relative">
          <img
            className="h-96 w-full rounded "
            alt=""
            src="https://i.postimg.cc/GmzyFXkf/rsz-pexels-jaime-reimer-2695232.jpg"
          />
          <div className="profile-photo avatar absolute bottom-[-20px] ">
            <div className="w-24 rounded-full ring ring-white ring-offset-base-100 ring-offset-2">
              <img alt="" src={user?.photoURL} />
            </div>
          </div>
        </div>
        <div className="flex justify-around ">
          <h3 className="font-bold py-8">Media</h3>
          <h3 className="font-bold py-8">Friends</h3>
          <div className="text-center">
            <h3 className="pt-8 font-bold">Ashik Ahmed</h3>
            <p className="text-sm">Dhaka, Bangladesh</p>
          </div>
          <h3 className="font-bold py-8">About </h3>
          <h3 className="font-bold py-8">Photos</h3>
        </div>
      </div>
    </div>
  );
}
