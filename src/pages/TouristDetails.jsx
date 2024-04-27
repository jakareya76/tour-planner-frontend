import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const TouristDetails = () => {
  const [tourData, setTourData] = useState(null);

  let { id } = useParams();

  useEffect(() => {
    const getTourData = async () => {
      const res = await fetch(`http://localhost:5000/tour/${id}`);
      const data = await res.json();

      setTourData(data);
    };

    getTourData();
  }, [id]);

  if (!tourData) {
    return (
      <div className="w-full h-[calc(100vh-100px)] flex items-center justify-center">
        <span className="loading loading-dots loading-lg"></span>
      </div>
    );
  }

  const {
    TouristsSpotName,
    cost,
    country,
    description,
    email,
    location,
    photo,
    seasonality,
    travelTime,
    username,
    visitors,
  } = tourData;

  return (
    <div className="container px-4 py-8 mx-auto">
      <div className="flex flex-col items-center justify-center gap-8 md:flex-row">
        <img
          src={photo}
          alt={TouristsSpotName}
          className="w-full mb-4 rounded-lg md:w-1/2"
        />
        <div>
          <h1 className="mb-2 text-3xl font-semibold">{TouristsSpotName}</h1>
          <p className="mb-2 text-gray-600">{description}</p>
          <div className="flex items-center mb-4">
            <span className="mr-2 text-gray-700">Location:</span>
            <span>
              {location}, {country}
            </span>
          </div>
          <div className="flex items-center mb-4">
            <span className="mr-2 text-gray-700">Cost:</span>
            <span>{cost}</span>
          </div>
          <div className="flex items-center mb-4">
            <span className="mr-2 text-gray-700">Seasonality:</span>
            <span>{seasonality}</span>
          </div>
          <div className="flex items-center mb-4">
            <span className="mr-2 text-gray-700">Travel Time:</span>
            <span>{travelTime} hours</span>
          </div>
          <div className="flex items-center mb-4">
            <span className="mr-2 text-gray-700">Visitors:</span>
            <span>{visitors}</span>
          </div>
          <div className="flex items-center mb-4">
            <span className="mr-2 text-gray-700">Contact Email:</span>
            <span>{email}</span>
          </div>
          <div className="flex items-center mb-4">
            <span className="mr-2 text-gray-700">Added by:</span>
            <span>{username}</span>
          </div>
          <Link to="/" className="btn btn-primary">
            Go Back
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TouristDetails;
