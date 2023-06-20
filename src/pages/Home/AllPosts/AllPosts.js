import React, { useEffect, useState } from "react";
import Post from "./Post";

export default function AllPosts() {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("https://free4mood.vercel.app/posts")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <div className="bg-white rounded p-5 mt-10">
      {services.map((service) => (
        <Post key={service._id} service={service}></Post>
      ))}
    </div>
  );
}
