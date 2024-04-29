import { useContext } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { AuthContext } from "../context/AuthProvider";
import { toast } from "react-toastify";

const EditTour = () => {
  const { user } = useContext(AuthContext);

  const { id } = useParams();
  const tourData = useLoaderData();

  const handleEditTour = async (event) => {
    event.preventDefault();

    const form = event.target;

    const TouristsSpotName = form.TouristsSpotName.value;
    const country = form.country.value;
    const location = form.location.value;
    const cost = form.cost.value;
    const seasonality = form.seasonality.value;
    const travelTime = form.traveltime.value;
    const visitors = form.visitors.value;
    const photo = form.photo.value;
    const description = form.description.value;

    const updatedTouristSpot = {
      TouristsSpotName,
      country,
      location,
      cost,
      seasonality,
      travelTime,
      visitors,
      photo,
      description,
    };

    try {
      const res = await fetch(
        `https://tour-planner-backend-ten.vercel.app/update-tour/${id}`,
        {
          method: "PUT",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(updatedTouristSpot),
        }
      );

      const data = await res.json();

      if (data.modifiedCount > 0) {
        toast.success("Update Tour Data");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center w-full">
      <h2 className="my-5 text-2xl font-bold text-center">
        Update Tourists Spot
      </h2>
      <form onSubmit={handleEditTour}>
        <div className="grid w-full grid-cols-1 gap-5 md:grid-cols-3">
          <input
            type="text"
            name="username"
            placeholder="Your Name"
            className="input input-bordered"
            defaultValue={user?.displayName}
            disabled
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            className="input input-bordered"
            defaultValue={user?.email}
            disabled
          />
          <input
            type="text"
            name="TouristsSpotName"
            placeholder="Tourists Spot Name"
            className="input input-bordered"
            defaultValue={tourData?.TouristsSpotName}
          />
          <input
            type="text"
            name="country"
            placeholder="Country Name"
            className="input input-bordered"
            defaultValue={tourData?.country}
          />
          <input
            type="text"
            name="location"
            placeholder="Location"
            className="input input-bordered"
            defaultValue={tourData?.location}
          />
          <input
            type="text"
            name="cost"
            placeholder="Average Cost"
            className="input input-bordered"
            defaultValue={tourData?.cost}
          />
          <input
            type="text"
            name="seasonality"
            placeholder="Seasonality"
            className="input input-bordered"
            defaultValue={tourData?.seasonality}
          />
          <input
            type="text"
            name="traveltime"
            placeholder="Travel Time"
            className="input input-bordered"
            defaultValue={tourData?.travelTime}
          />
          <input
            type="text"
            name="visitors"
            placeholder="Tota Visitors Per Year"
            className="input input-bordered"
            defaultValue={tourData?.visitors}
          />
          <input
            type="text"
            name="photo"
            placeholder="Photo URL"
            className="md:col-span-3 input input-bordered"
            defaultValue={tourData?.photo}
          />
        </div>
        <textarea
          name="description"
          cols="30"
          rows="10"
          placeholder="Short Description"
          className="w-full px-5 py-4 my-4 border rounded-xl"
          defaultValue={tourData?.description}
        ></textarea>
        <button type="submit" className="w-full text-lg btn btn-primary">
          Update Tourists Spot
        </button>
      </form>
    </div>
  );
};

export default EditTour;
