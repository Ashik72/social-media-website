import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { authContext } from "../../context/UserContext/UserContext";

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
          <Link className="btn btn-ghost normal-case text-xl">daisyUI</Link>

          <div className="form-control">
            <input
              type="text"
              placeholder="Search"
              className="input input-bordered"
            />
          </div>
        </div>

        <div className="flex-none gap-2">
          {/* Notification */}
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle">
              <div className="indicator">
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
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                <span className="badge badge-sm indicator-item">8</span>
              </div>
            </label>
            <div
              tabIndex={0}
              className="mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow"
            >
              <div className="card-body">
                <span className="font-bold text-lg">8 Items</span>
                <span className="text-info">Subtotal: $999</span>
                <div className="card-actions">
                  <button className="btn btn-primary btn-block">
                    View cart
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* Profile Photo  */}
          <div className="dropdown dropdown-end">
            <Link to="/login" className="text-slate-900">
              Login
            </Link>
            {/* <label tabIndex={0} className="btn btn-ghost btn-circle avatar"> */}
            <div tabIndex={0} className="avatar"></div>
            <div
              className="tooltip tooltip-bottom"
              // data-tip={user?.displayName}
            >
              <img
                tabIndex={0}
                className="w-10 rounded-full"
                alt=""
                src={user?.photoURL}
              />
            </div>
            {/* </label> */}
            <ul
              tabIndex={0}
              className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52 text-neutral-content"
            >
              <li>
                <Link className="justify-between text-slate-900">
                  Profile
                  <span className="badge">New</span>
                </Link>
              </li>
              <li>
                <Link className="text-slate-900">Settings</Link>
              </li>
              <li>
                <Link to="/login" className="text-slate-900">
                  Login
                </Link>
              </li>
              <li>
                <Link onClick={handleSignOut} className="text-slate-900">
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
