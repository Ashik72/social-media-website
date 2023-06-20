import React, { useContext } from "react";
import { toast } from "react-hot-toast";
import { authContext } from "../../../../context/UserContext/UserContext";

export default function AboutAddModal() {
  const { user } = useContext(authContext);

  const handleAbout = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const address = form.address.value;
    const education = form.education.value;
    const email = user?.email;

    const aboutInfo = {
      name,
      address,
      education,
      email,
    };
    console.log(aboutInfo);
    fetch("https://free4mood.vercel.app/about", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(aboutInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          //close the mode
          // setModelProduct(null);
          toast.success("Personal Information");
        } else {
          toast.error(data.message);
        }
      });
  };

  return (
    <>
      <input type="checkbox" id="my-modal-3" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="my-modal-3"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold text-center">
            Add Your Personal Information
          </h3>

          <form onSubmit={handleAbout} className="grid grid-cols-1 gap-3 mt-6">
            <div>
              {/* <h3 className="text-base ml-2"></h3> */}
              <input
                name="name"
                type="text"
                defaultValue=""
                placeholder="Your full name"
                className="input w-full input-bordered "
              />
            </div>

            <div>
              <input
                name="address"
                type="text"
                defaultValue=""
                placeholder="Address"
                className="input w-full input-bordered"
              />
            </div>
            <div>
              <input
                name="education"
                type="text"
                defaultValue=""
                placeholder="Education"
                className="input w-full input-bordered"
              />
            </div>
            <div>
              <input
                name="email"
                type="email"
                defaultValue={user?.email}
                placeholder="Email"
                disabled
                className="input w-full input-bordered"
              />
            </div>

            <br />
            <input
              className="btn btn-accent w-full"
              type="submit"
              value="Submit"
            />
          </form>
        </div>
      </div>
    </>
  );
}
