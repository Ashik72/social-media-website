import React from "react";
import { Link, Outlet } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { BsMessenger } from "react-icons/bs";
import Navber from "../components/Navbar/Navber";
import Footer from "../components/Footer/Footer";

export default function LeftRightLayout() {
  return (
    <>
      {/* Left sidebar under right sidebar */}
      <div className="drawer drawer-mobile fixed">
        <input
          id="dashboard-drawer"
          type="checkbox"
          className="drawer-toggle"
        />
        <div className="drawer-content">
          {/* <Outlet></Outlet> */}
          {/* Right sidebar */}
          <div className="drawer drawer-mobile drawer-end">
            <input
              id="dashboard-drawer"
              type="checkbox"
              className="drawer-toggle"
            />
            <div className="drawer-content">
              <Outlet></Outlet>
            </div>
            <div className="drawer-side bg-white drawer-end">
              <label
                htmlFor="dashboard-drawer"
                className="drawer-overlay"
              ></label>
              <ul className="menu p-0 text-base-content">
                <li>
                  <Link to="#">
                    <div className="avatar online">
                      <div className="w-10 rounded-full">
                        <img
                          alt=""
                          src="https://images.pexels.com/photos/805367/pexels-photo-805367.jpeg?auto=compress&cs=tinysrgb&w=600"
                        />
                      </div>
                    </div>
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    <div className="avatar online">
                      <div className="w-10 rounded-full">
                        <img
                          alt=""
                          src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        />
                      </div>
                    </div>
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    <div className="avatar offline">
                      <div className="w-10 rounded-full">
                        <img
                          alt=""
                          src="https://images.pexels.com/photos/1323650/pexels-photo-1323650.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        />
                      </div>
                    </div>
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    <div className="avatar offline">
                      <div className="w-10 rounded-full">
                        <img
                          alt=""
                          src="https://images.pexels.com/photos/2905823/pexels-photo-2905823.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                        />
                      </div>
                    </div>
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    <div className="avatar online">
                      <div className="w-10 rounded-full">
                        <img
                          alt=""
                          src="https://images.pexels.com/photos/3226401/pexels-photo-3226401.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        />
                      </div>
                    </div>
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    <div className="avatar offline">
                      <div className="w-10 rounded-full">
                        <img
                          alt=""
                          src="https://images.pexels.com/photos/1081188/pexels-photo-1081188.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                        />
                      </div>
                    </div>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="drawer-side bg-white drawer-end">
          <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
          <ul className="menu p-0 text-base-content">
            <li className="text-3xl">
              <Link to="/dashboard/myProducts">
                <FaHome />
              </Link>
            </li>
            <li className="text-3xl">
              <Link to="/dashboard/myWishlists">
                <BsMessenger />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
