import React from "react";
import { MdAccountBox, MdOutlineHomeWork } from "react-icons/md";
import { FaSchool } from "react-icons/fa";
import { HiMail } from "react-icons/hi";

export default function AboutInfo({ about }) {
  const { name, address, education, email } = about;
  return (
    <div className="grid grid-cols-3 gap-3 rounded border-orange-900">
      <div className="border-2 p-2 rounded">
        {/* Name  */}
        <div className="flex items-center my-3">
          <div className="pr-1 text-xl">
            <MdAccountBox />
          </div>
          <div className="border-l-4 pl-1">
            <h1 className="text-sm font-bold  border-r-orange-900">
              Profile Name
            </h1>
            <p className="">{name}</p>
          </div>
        </div>
        {/* Address  */}
        <div className="flex items-center my-3">
          <div className="pr-1 text-xl">
            <MdOutlineHomeWork />
          </div>
          <div className="border-l-4 pl-1">
            <h1 className="text-sm font-bold  border-r-orange-900">Address</h1>
            <p className="">{address}</p>
          </div>
        </div>
      </div>
      <div className="border-2 p-2 rounded">
        {/* 2.Education */}
        <div className="flex items-center my-3">
          <div className="pr-1 text-xl">
            <FaSchool />
          </div>
          <div className="border-l-4 pl-1">
            <h1 className="text-sm font-bold  border-r-orange-900">
              Education
            </h1>
            <p className="">{education}</p>
          </div>
        </div>
      </div>
      {/* Email  */}
      <div className="border-2 p-2 rounded">
        {/* Email  */}
        <div className="flex items-center my-3">
          <div className="pr-1 text-xl">
            <HiMail />
          </div>
          <div className="border-l-4 pl-1">
            <h1 className="text-sm font-bold  border-r-orange-900">Mail</h1>
            <p className="">{email}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
