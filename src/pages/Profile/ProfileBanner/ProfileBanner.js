import React, { useContext, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { authContext } from "../../../context/UserContext/UserContext";
import "./ProfileBanner.css";
import { TfiLayoutMediaOverlay } from "react-icons/tfi";
import { FaUserFriends, FaBookReader } from "react-icons/fa";
import { MdOutlinePhotoLibrary } from "react-icons/md";

export default function ProfileBanner() {
  const [about, setAbout] = useState([]);
  const { user } = useContext(authContext);
  const [isActive, setIsActive] = useState(false);

  const toggleClass = () => {
    setIsActive(!isActive);
  };

  useEffect(() => {
    fetch(`https://free4mood.vercel.app/about/?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => setAbout(data));
  }, [user?.email]);
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
              <img alt="" referrerpolicy="no-referrer" src={user?.photoURL} />
            </div>
          </div>
        </div>
        <div className="flex justify-around">
          <div className="font-bold py-8">
            <NavLink
              to="/profile/media"
              className={({ isActive }) =>
                isActive
                  ? "btn btn-outline btn-info btn-sm"
                  : " btn hover:btn-info btn-sm btn-outline"
              }
            >
              <TfiLayoutMediaOverlay />
              <h1 className="pl-2">Media</h1>
            </NavLink>
          </div>
          <div className=" font-bold py-8">
            <NavLink
              to="/profile/friends"
              className={({ isActive }) =>
                isActive
                  ? "btn btn-outline btn-info btn-sm"
                  : " btn hover:btn-info btn-sm btn-outline"
              }
            >
              <FaUserFriends />
              <h1 className="pl-2">Friends</h1>
            </NavLink>
          </div>

          <div className="text-center">
            <h3 className="pt-8 font-bold">{about.name}</h3>
            <p className="text-sm">{about.address}</p>
          </div>

          <div className=" font-bold py-8">
            <NavLink
              to="/profile/about"
              className={({ isActive }) =>
                isActive
                  ? "btn btn-outline btn-info btn-sm"
                  : "btn hover:btn-info btn-sm btn-outline"
              }
            >
              <FaBookReader />
              <h1 className="pl-2">About</h1>
            </NavLink>
          </div>
          <div className=" font-bold py-8">
            <NavLink
              to="/profile/photos"
              className={({ isActive }) =>
                isActive
                  ? "btn btn-outline btn-info btn-sm"
                  : "hover:btn-info btn btn-sm btn-outline"
              }
            >
              <MdOutlinePhotoLibrary />
              <h1 className="pl-2">Photos</h1>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}
