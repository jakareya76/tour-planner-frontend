import { useEffect, useState } from "react";
import { FaPeopleRobbery } from "react-icons/fa6";
import { MdOutlineTravelExplore } from "react-icons/md";

const TouristSpots = () => {
  const [allTours, setAllTours] = useState([]);

  useEffect(() => {
    const getAllTours = async () => {
      const res = await fetch("http://localhost:5000/all-tour");
      const data = await res.json();

      setAllTours(data);
    };

    getAllTours();
  }, []);

  console.log(allTours);

  return (
    <section>
      <h2 className="text-3xl font-bold text-center">Our Top Tourists Spots</h2>
      <div className="flex items-center justify-center mt-8">
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {allTours.map((tour) => {
            return (
              <div
                key={tour._id}
                className="shadow-xl card max-w-96 bg-base-100"
              >
                <figure>
                  <img
                    src={tour.photo}
                    alt="img"
                    className="w-full h-[220px] object-cover bg-center bg-no-repeat"
                  />
                </figure>
                <div className="card-body">
                  <div className="flex items-center justify-between w-full">
                    <h2 className="card-title">{tour.TouristsSpotName}</h2>
                    <h2 className="text-xl font-semibold">${tour.cost}</h2>
                  </div>
                  <div className="flex items-center justify-between w-full">
                    <h4>{tour.country}</h4>
                    <h4 className="text-sm text-gray-600">{tour.location}</h4>
                  </div>
                  <hr />

                  <div className="flex items-center justify-between">
                    <h4 className="flex items-center justify-center gap-1">
                      <FaPeopleRobbery />{" "}
                      <span>Visitors : {tour.visitors}</span>
                    </h4>
                    <h4 className="flex items-center justify-center gap-1">
                      <MdOutlineTravelExplore />{" "}
                      <span>Travel Time : {tour.travelTime}</span>
                    </h4>
                  </div>
                  <div className="card-actions">
                    <button className="w-full btn btn-primary">
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TouristSpots;
