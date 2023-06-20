import React, { useContext, useEffect, useState } from "react";
import { authContext } from "../../../context/UserContext/UserContext";
import { AiOutlineLike } from "react-icons/ai";
import { FaRegCommentAlt } from "react-icons/fa";
import { BiDetail } from "react-icons/bi";

import Comment from "./Comment";
import { Link } from "react-router-dom";
import { toast } from "react-hot-toast";

export default function Post({ service }) {
  const { user } = useContext(authContext);
  const [comments, setComments] = useState([]);
  const [update, setUpdate] = useState(false);

  // const [loading, setLoading] = useState(true);

  const { text, file, displayName, photoURL, _id } = service;
  console.log(service);

  const handleComment = (e) => {
    e.preventDefault();
    const from = e.target;
    const message = from.comment.value;
    const name = user?.displayName || "unregistered";
    const email = user?.email || "unregistered";
    const postId = _id;
    const userPhoto = user?.photoURL;

    const comment = {
      name,
      email,
      message,
      postId,
      userPhoto,
    };

    fetch("https://free4mood.vercel.app/comment", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(comment),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          toast.success("Comment added!");
          from.reset();
          setUpdate(true);
        }
      })
      .catch((er) => console.error(er));
  };

  useEffect(() => {
    fetch(`https://free4mood.vercel.app/comment/${_id}`)
      .then((res) => res.json())
      .then((data) => setComments(data));
  }, [_id, update]);
  return (
    <div className="bg-white rounded p-5 mt-10">
      <div className="border m-3 p-2">
        <div className="flex items-center">
          <div className=" avatar pr-2">
            <div className="w-8 h-8 rounded-full ring ring-white ring-offset-base-100 ">
              <img alt="" src={photoURL} />
            </div>
          </div>
          <div>
            <h1>{displayName}</h1>
          </div>
        </div>

        <div className="border border-inherit rounded mt-2">
          <p className="pt-3 px-4 pb-2">{text}</p>
          <img alt="" src={file} />
        </div>
        <form>
          <div className="flex justify-between my-3 px-2">
            <div className="text-3xl flex items-center">
              <AiOutlineLike />
              <p className="text-sm pl-1">120 Like</p>
            </div>
            <div className="text-2xl flex items-center">
              <FaRegCommentAlt />
              <p className="text-sm pl-1">{comments.length} Comments</p>
            </div>
            <Link
              to={`/postdetails/${_id}`}
              className="text-3xl flex items-center"
            >
              <BiDetail />
              <p className="text-sm pl-1">Details</p>
            </Link>
          </div>
        </form>
        <div className="border">
          <form onSubmit={handleComment}>
            <div className="flex justify-between my-3 px-2">
              <div className="flex">
                <textarea
                  name="comment"
                  className="textarea textarea-info w-72 h-12 mr-2"
                  placeholder="Type you comment.."
                ></textarea>
                <button className="btn btn-success text-white rounded-3xl">
                  Submit
                </button>
              </div>
            </div>
          </form>
          <h1 className=" font-semibold pl-1">All comments</h1>
          {comments.map((comment) => (
            <Comment key={comment._id} comment={comment}></Comment>
          ))}
        </div>
      </div>
    </div>
  );
}
