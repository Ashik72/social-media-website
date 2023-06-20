import React, { useContext } from "react";
import toast from "react-hot-toast";
import { authContext } from "../../../../context/UserContext/UserContext";

const AobutEditModal = ({ modelProduct, setModelProduct, about }) => {
  const { name, address, education, email } = about;

  // const { user } = useContext(authContext);

  // const handleBooking = (event) => {
  //   event.preventDefault();
  //   const form = event.target;
  //   const resalePrice = form.resalePrice.value;
  //   const name = form.name.value;
  //   const email = form.email.value;
  //   const phone = form.phone.value;
  //   const meetingLocation = form.meetingLocation.value;

  //   const booking = {
  //     productId: _id,
  //     img,
  //     title,
  //     user: name,
  //     resalePrice,
  //     email,
  //     phone,
  //     meetingLocation,
  //   };

  //   fetch("https://free4mood.vercel.appbookings", {
  //     method: "POST",
  //     headers: {
  //       "content-type": "application/json",
  //     },
  //     body: JSON.stringify(booking),
  //   })
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log(data);
  //       if (data.acknowledged) {
  //         //close the mode
  //         setModelProduct(null);
  //         toast.success("Booking Confrimed");
  //         // refetch();
  //       } else {
  //         toast.error(data.message);
  //       }
  //     });
  // };

  return (
    <>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="booking-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">
            {/* {title} */}Edit Your About Information
          </h3>

          <form
            // onSubmit={handleBooking}
            className="grid grid-cols-1 gap-3 mt-6"
          >
            <div>
              <h3 className="text-sm font-sm">Name</h3>
              <input
                name="resalePrice"
                type="text"
                // disabled
                value={name}
                className="input w-full input-bordered "
              />
            </div>

            <div>
              <h3 className="text-sm font-sm">Address</h3>
              <input
                name="name"
                type="text"
                value={address}
                className="input w-full input-bordered"
              />
            </div>
            <div>
              <h3 className="text-sm font-sm">Education</h3>
              <input
                name="email"
                type="text"
                value={education}
                placeholder="Email Address"
                className="input w-full input-bordered"
              />
            </div>
            <div>
              <h3 className="text-sm font-sm">Anther Email</h3>
              <input
                name="phone"
                type="text"
                value={email}
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
};

export default AobutEditModal;
