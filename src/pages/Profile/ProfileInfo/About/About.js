import React, { useContext, useEffect, useState } from "react";
import { CiCircleMore } from "react-icons/ci";
import { authContext } from "../../../../context/UserContext/UserContext";
import AboutAddModal from "./AboutAddModal";
import AboutInfo from "./AboutInfo";
import AobutEditModal from "./AboutEditModal";

export default function About() {
  const [about, setAbout] = useState([]);
  const { user } = useContext(authContext);
  // const [modelProduct, setModelProduct] = useState([]);

  // Get API for about information
  useEffect(() => {
    fetch(`https://free4mood.vercel.app/about/?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => setAbout(data));
  }, [user?.email]);
  return (
    <div>
      <div className="bg-slate-200 py-2 flex justify-between px-2">
        <h1 className="text-xl font-bold px-2">Your Personal Information</h1>
        <div className="dropdown dropdown-left">
          <label tabIndex={0} className="text-3xl font-semibold ">
            <CiCircleMore />
          </label>
          <ul
            tabIndex={0}
            className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <label htmlFor="my-modal-3" className="">
                Add your about
              </label>
            </li>
            <li>
              <label
                // onClick={() => setModelProduct()}
                htmlFor="booking-modal"
                className=""
              >
                Edit your about
              </label>
            </li>
          </ul>
        </div>
      </div>
      <AboutInfo about={about}></AboutInfo>
      <AboutAddModal></AboutAddModal>
      <AobutEditModal about={about}></AobutEditModal>
    </div>
  );
}
