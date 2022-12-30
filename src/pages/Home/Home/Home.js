import React from "react";
import AllPosts from "../AllPosts/AllPosts";
import Upload from "../Upload/Upload";
import "./Home.css";

export default function Home() {
  return (
    <div className="home bg-gray-200 p-10 rounded ">
      <div className="grid grid-cols-4 gap-2">
        <div className="">Coming soon</div>
        <div className="col-span-2">
          <Upload></Upload>
          <AllPosts></AllPosts>
        </div>
        <div className="">Coming soon</div>
      </div>
    </div>
  );
}
