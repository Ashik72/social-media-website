import React, { useContext } from "react";
import { authContext } from "../../../context/UserContext/UserContext";
import { useForm } from "react-hook-form";

export default function Upload() {
  const { user } = useContext(authContext);
  const { register, handleSubmit } = useForm();
  const imageHostKey = "fb1cfae4c9a6d1e206ffec4591ec71e0";
  // console.log(user);
  // const handlePost = (data) => {
  //   console.log(data);
  //   const image = data.image[0];
  //   const formData = new FormData();
  //   formData.append("image", image);
  //   const url = `https://api.imgbb.com/1/upload?expiration=600&key=${imageHostKey}`;
  //   fetch(url, {
  //     method: "POST",
  //     body: formData,
  //   })
  //     .then((res) => res.json())
  //     .then((imgData) => {
  //       if(imgData.success){
  //         console.log(imgData.data.url);
  //         const post = {
  //             text: data.text,
  //             file: imgData.data.url,
  //             email: user?.email,
  //             displayName: user?.displayName,
  //             photoURL: user?.photoURL
  //         }
  //         fetch("http://localhost:5000/post", {
  //           method: "POST",
  //           headers: {
  //             "content-type": "application/json",
  //           },
  //           body: JSON.stringify(post),
  //         })
  //           .then((res) => res.json())
  //           .then((data) => {
  //             console.log(data);
  //             if (data.acknowledged) {
  //               alert("post placed successfully");

  //               form.reset();
  //             }
  //           })
  //           .catch((er) => console.error(er));
  //       }
  //     }
  //   // e.preventDefault();
  //   // const form = e.target;
  //   // const text = form.text.value;
  //   // const file = form.file.value;
  //   // const email = user?.email;
  //   // const displayName = user?.displayName;
  //   // const photoURL = user?.photoURL;

  //   // const post = {
  //   //   text,
  //   //   file,
  //   //   email,
  //   //   displayName,
  //   //   photoURL,
  //   // };
  //   // console.log(post);
  //   // fetch("http://localhost:5000/post", {
  //   //   method: "POST",
  //   //   headers: {
  //   //     "content-type": "application/json",
  //   //   },
  //   //   body: JSON.stringify(post),
  //   // })
  //   //   .then((res) => res.json())
  //   //   .then((data) => {
  //   //     console.log(data);
  //   //     if (data.acknowledged) {
  //   //       alert("post placed successfully");

  //   //       form.reset();
  //   //     }
  //   //   })
  //   //   .catch((er) => console.error(er));
  // };

  const handlePost = (data) => {
    const image = data.image[0];
    const formData = new FormData();
    formData.append("image", image);
    const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgData) => {
        if (imgData.success) {
          console.log(imgData.data.url);
          const post = {
            text: data.text,
            file: imgData.data.url,
            email: user?.email,
            displayName: user?.displayName,
            photoURL: user?.photoURL,
          };

          // save doctor information to the database
          // fetch("https://doctors-portal-server-rust.vercel.app/doctors", {
          //   method: "POST",
          //   headers: {
          //     "content-type": "application/json",
          //     authorization: `bearer ${localStorage.getItem("accessToken")}`,
          //   },
          //   body: JSON.stringify(post),
          // })
          //   .then((res) => res.json())
          //   .then((result) => {
          //     console.log(result);

          //   });
          fetch("http://localhost:5000/post", {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(post),
          })
            .then((res) => res.json())
            .then((data) => {
              console.log(data);
              if (data.acknowledged) {
                alert("post placed successfully");
              }
            })
            .catch((er) => console.error(er));
        }
      });
  };

  // if (isLoading) {
  //   return <Loading></Loading>;
  // }
  return (
    <div className="bg-white rounded p-5 ">
      <form onSubmit={handleSubmit(handlePost)}>
        <div className="border border-inherit rounded">
          <div className="flex">
            <div className=" avatar p-1">
              <div className="w-16 h-16 rounded-full ring ring-white ring-offset-base-100 ">
                {user?.uid ? (
                  <>
                    <img alt="" src={user?.photoURL} />
                  </>
                ) : (
                  <>
                    <img
                      alt=""
                      referrerpolicy="no-referrer"
                      src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    />
                  </>
                )}
              </div>
            </div>

            <div className="mt-1 w-full  m-2">
              <textarea
                {...register("text")}
                id="about"
                name="text"
                type="text"
                rows={3}
                className="mt-1 block w-full h-24 border-inherit shadow-sm sm:text-sm"
                placeholder="Add your mood..."
                defaultValue={""}
              />
            </div>
          </div>
          <div className="flex justify-between items-center p-2 border-t border-inherit text-inherit">
            <div className="form-control">
              <input
                className="form-control
                            block
                            w-full
                            text-base
                            font-normal
                            text-gray-700
                            bg-white bg-clip-padding
                            transition
                            ease-in-out
                            m-0
                            focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                type="file"
                name="file"
                id="formFile"
                {...register("image")}
              />
            </div>

            <div>
              <button
                type="submit"
                className="text-slate-400 btn btn-sm btn-outline"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
