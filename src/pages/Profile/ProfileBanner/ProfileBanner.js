import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { authContext } from "../../../context/UserContext/UserContext";
import "./ProfileBanner.css";

export default function ProfileBanner() {
  const [about, setAbout] = useState([]);
  const { user } = useContext(authContext);

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
        <div className="flex justify-around ">
          <Link to="/profile/media" className="font-bold py-8">
            Media
          </Link>
          <Link to="/profile/friends" className="font-bold py-8">
            Friends
          </Link>
          <div className="text-center">
            <h3 className="pt-8 font-bold">{about.name}</h3>
            <p className="text-sm">{about.address}</p>
          </div>
          <Link to="/profile/about" className="font-bold py-8">
            About{" "}
          </Link>
          <Link to="/profile/photos" className="font-bold py-8">
            Photos
          </Link>
        </div>
      </div>
    </div>
  );
}
