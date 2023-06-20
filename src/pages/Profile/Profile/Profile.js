import React, { useContext, useEffect, useState } from "react";
// import ProfileBanner from "../ProfileBanner/ProfileBanner";
import Media from "../ProfileInfo/Media/Media";
import { authContext } from "../../../context/UserContext/UserContext";
import Footer from "../../../components/Footer/Footer";
// import ProfileInfo from "../ProfileInfo/ProfileInfo";

export default function Profile() {
  const [userPosts, setUserPosts] = useState([]);
  const { user } = useContext(authContext);

  useEffect(() => {
    fetch(`https://free4mood.vercel.app/userposts/?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => setUserPosts(data));
  }, [user?.email]);
  return (
    <div className="mb-16">
      <div className="home bg-gray-200  rounded pt-10">
        <div className="grid grid-cols-4 gap-2">
          <div className="">Coming soon</div>
          <div className="col-span-2">
            <div className="bg-gray-200  rounded">
              {userPosts.map((posts) => (
                <Media key={posts._id} posts={posts}></Media>
              ))}
            </div>
          </div>
          <div className="">Coming soon</div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}
