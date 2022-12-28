import React from "react";
import Upload from "../Upload/Upload";

export default function Home() {
  return (
    <div className="bg-gray-200 p-10 rounded ">
      <div className="grid grid-cols-4 gap-2">
        <div className="">Hello</div>
        <div className="col-span-2">
          <Upload></Upload>
        </div>
        <div className="">Hello</div>
      </div>
    </div>
  );
}
