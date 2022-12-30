import React, { useEffect, useState } from "react";
import Post from "./Post";

export default function AllPosts() {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://free4mood.vercel.app/posts")
      .then((res) => res.json())
      .then((data) => setServices(data));
    setLoading(false);
  }, []);

  if (loading) {
    return <h1 className="text-5xl p-2">Loading...</h1>;
  }
  return (
    <div className="bg-white rounded p-5 mt-10">
      {services.map((service) => (
        <Post key={service._id} service={service}></Post>
      ))}
    </div>
  );
}
