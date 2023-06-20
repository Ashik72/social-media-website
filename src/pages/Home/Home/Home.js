import React from "react";
import Upload from "../Upload/Upload";
import "./Home.css";
import Footer from "../../../components/Footer/Footer";

export default function Home() {
  return (
    <div className="mb-16">
      <div className="home bg-gray-200  rounded pt-10">
        <div className="grid grid-cols-4 gap-2">
          <div className="">Coming soon</div>
          <div className="col-span-2">
            <Upload></Upload>
            {/* <AllPosts></AllPosts> */}
          </div>
          <div className="">Coming soon</div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}
