import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { authContext } from "../../context/UserContext/UserContext";
import { BsMessenger } from "react-icons/bs";
import { IoNotificationsSharp } from "react-icons/io5";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

export default function Navber() {
  const { user, userSignOut } = useContext(authContext);

  const handleSignOut = () => {
    userSignOut()
      .then(() => {
        // navigate("/");
      })
      .catch((error) => {});
  };

  console.log(user?.photoURL);

  return (
    <div>
      <div className="navbar bg-neutral bg-[#3F4257] text-neutral-content lg:px-20 md:px-4">
        {/* Logo and Search  */}
        <div className="flex-1">
          {/* ProfileLayout  */}
          <label
            htmlFor="dashboard-drawer"
            tabIndex={2}
            className="btn btn-ghost lg:hidden"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <Link to="/" className="normal-case text-xl mr-5">
            <img
              className="w-40"
              src="https://i.postimg.cc/TY7Xhq6T/logo-free4mood2-removebg-preview.png"
              alt=""
            />
          </Link>
          <input
            type="text"
            placeholder="Search"
            className="input input-ghost w-full max-w-xs"
          />
        </div>

        <div className="flex-none gap-2">
          {/* Message */}
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle">
              <div className="indicator">
                <span className="text-2xl">
                  <BsMessenger />
                </span>
                <span className="badge badge-sm indicator-item">0</span>
              </div>
            </label>
            <div
              tabIndex={0}
              className="mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow"
            >
              <div className="card-body">
                <span className="text-info">Comming soon</span>
              </div>
            </div>
          </div>
          {/* Notification */}
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle">
              <div className="indicator">
                <span className="text-2xl">
                  <IoNotificationsSharp />
                </span>

                <span className="badge badge-sm indicator-item">0</span>
              </div>
            </label>
            <div
              tabIndex={0}
              className="mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow"
            >
              <div className="card-body">
                <span className="text-info">Comming soon</span>
              </div>
            </div>
          </div>
          {/* Profile Photo  */}
          <div className="dropdown dropdown-end">
            <div className="stat-figure text-secondary">
              <div tabIndex={0} className="avatar"></div>

              <div
                className="tooltip tooltip-bottom"
                // data-tip={user?.displayName}
              >
                <div className="avatar online">
                  <div className="w-10 rounded-full">
                    <img
                      tabIndex={0}
                      className="w-10 rounded-full"
                      alt=""
                      referrerpolicy="no-referrer"
                      src={user?.photoURL}
                    />
                    <MdOutlineKeyboardArrowDown className="text-white" />
                  </div>
                </div>
                {/* <h1>{user?.displayName}</h1> */}
              </div>
            </div>

            <ul
              tabIndex={0}
              className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-neutral rounded-box w-52 text-neutral-content"
            >
              <li>
                <Link to="/profile/media" className="justify-between ">
                  Profile
                  {/* <span className="badge">New</span> */}
                </Link>
              </li>
              <li>
                <Link className="">Settings</Link>
              </li>
              <li>
                <Link to="/login" className="">
                  Login
                </Link>
              </li>
              <li>
                <Link onClick={handleSignOut} className="">
                  Logout
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
