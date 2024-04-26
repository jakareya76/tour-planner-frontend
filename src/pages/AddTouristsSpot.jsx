import { toast } from "react-toastify";

const AddTouristsSpot = () => {
  const handleAddTouristsSpot = async (event) => {
    event.preventDefault();

    const form = event.target;

    const username = form.username.value;
    const email = form.email.value;
    const TouristsSpotName = form.TouristsSpotName.value;
    const country = form.country.value;
    const location = form.location.value;
    const cost = form.cost.value;
    const seasonality = form.seasonality.value;
    const travelTime = form.traveltime.value;
    const visitors = form.visitors.value;
    const photo = form.photo.value;
    const description = form.description.value;

    const touristSpot = {
      username,
      email,
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
      const res = await fetch("http://localhost:5000/add-tour", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(touristSpot),
      });

      if (res.ok) {
        form.reset();
        toast.success("Tour Added Successfully");
      }

      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center w-full">
      <h2 className="my-5 text-2xl font-bold text-center">
        Add Your Favourite Tourists Spot
      </h2>
      <form onSubmit={handleAddTouristsSpot}>
        <div className="grid w-full grid-cols-1 gap-5 md:grid-cols-3">
          <input
            type="text"
            name="username"
            placeholder="Your Name"
            className="input input-bordered"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            className="input input-bordered"
          />
          <input
            type="text"
            name="TouristsSpotName"
            placeholder="Tourists Spot Name"
            className="input input-bordered"
          />
          <input
            type="text"
            name="country"
            placeholder="Country Name"
            className="input input-bordered"
          />
          <input
            type="text"
            name="location"
            placeholder="Location"
            className="input input-bordered"
          />
          <input
            type="text"
            name="cost"
            placeholder="Average Cost"
            className="input input-bordered"
          />
          <input
            type="text"
            name="seasonality"
            placeholder="Seasonality"
            className="input input-bordered"
          />
          <input
            type="text"
            name="traveltime"
            placeholder="Travel Time"
            className="input input-bordered"
          />
          <input
            type="text"
            name="visitors"
            placeholder="Tota Visitors Per Year"
            className="input input-bordered"
          />
          <input
            type="text"
            name="photo"
            placeholder="Photo URL"
            className="md:col-span-3 input input-bordered"
          />
        </div>
        <textarea
          name="description"
          cols="30"
          rows="10"
          placeholder="Short Description"
          className="w-full px-5 py-4 my-4 border rounded-xl"
        ></textarea>
        <button type="submit" className="w-full text-lg btn btn-primary">
          Add Tourists Spot
        </button>
      </form>
    </div>
  );
};

export default AddTouristsSpot;
