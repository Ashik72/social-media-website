import React from "react";

export default function Comment({ comment }) {
  const { name, message, userPhoto } = comment;
  return (
    <li className="flex py-6 border-t px-3">
      <div className="w-8 h-8">
        <img className="rounded-full" alt="" src={userPhoto} />
      </div>
      <div className="ml-4 flex flex-1 flex-col">
        <div>
          <div className="flex justify-between text-base font-medium text-gray-900">
            <h3>{name}</h3>
            <p className="ml-4 font-small">Edit</p>
          </div>
        </div>
        <div className="flex flex-1 items-end justify-between text-sm">
          <p className="text-gray-500">{message}</p>

          <div className="flex">
            <button
              type="button"
              className="font-medium text-indigo-600 hover:text-indigo-500"
            >
              Remove
            </button>
          </div>
        </div>
      </div>
    </li>
  );
}
