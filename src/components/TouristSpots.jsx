import { useEffect, useState } from "react";
import { FaPeopleRobbery } from "react-icons/fa6";
import { MdOutlineTravelExplore } from "react-icons/md";
import { Link } from "react-router-dom";
import { Fade } from "react-awesome-reveal";
import { Typewriter } from "react-simple-typewriter";

const TouristSpots = ({ isShowSort }) => {
  const [allTours, setAllTours] = useState([]);
  const [sortBy, setSortBy] = useState("Sort By Price");

  useEffect(() => {
    const getAllTours = async () => {
      const res = await fetch("http://localhost:5000/all-tour");
      const data = await res.json();

      const sortedData = sortTours(data, sortBy);
      setAllTours(sortedData);
    };

    getAllTours();
  }, [sortBy]);

  const sortTours = (tours, sortBy) => {
    if (sortBy === "Low To High") {
      return tours.sort((a, b) => a.cost - b.cost);
    } else if (sortBy === "High To Low") {
      return tours.sort((a, b) => b.cost - a.cost);
    }

    return tours;
  };

  const text = [
    "All Tourists Spots",
    "Let the journey begin",
    "explore the world",
  ];

  return (
    <section className="py-20">
      <Fade>
        <h2 className="text-3xl font-bold text-center">
          <Typewriter words={text} loop={true} />
        </h2>
      </Fade>
      {isShowSort && (
        <Fade>
          <div className="flex justify-center mt-5">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="w-full max-w-xs select select-bordered"
            >
              <option disabled>Sort By Price</option>
              <option value="Low To High">Low To High</option>
              <option value="High To Low">High To Low</option>
            </select>
          </div>
        </Fade>
      )}

      <div className="flex items-center justify-center mt-8">
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {allTours.map((tour) => (
            <div key={tour._id} className="shadow-xl card max-w-96 bg-base-100">
              <Fade>
                <figure>
                  <img
                    src={tour.photo}
                    alt="Tourist Spot"
                    className="w-full h-[220px] object-cover rounded-t-xl bg-center bg-no-repeat"
                  />
                </figure>
                <div className="card-body">
                  <div className="flex items-center justify-between w-full">
                    <h2 className="card-title">{tour.TouristsSpotName}</h2>
                    <h2 className="text-xl font-semibold">${tour.cost}</h2>
                  </div>
                  <div className="flex items-center justify-between w-full">
                    <h4>{tour.country}</h4>
                    <h4 className="text-sm text-gray-600">
                      {tour.seasonality}
                    </h4>
                  </div>
                  <hr />
                  <div className="flex items-center justify-between">
                    <h4 className="flex items-center justify-center gap-1">
                      <FaPeopleRobbery />
                      <span>Visitors: {tour.visitors}</span>
                    </h4>
                    <h4 className="flex items-center justify-center gap-1">
                      <MdOutlineTravelExplore />
                      <span>Travel Time: {tour.travelTime}</span>
                    </h4>
                  </div>
                  <div className="card-actions">
                    <Link
                      to={`/tour-details/${tour._id}`}
                      className="w-full btn btn-primary"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              </Fade>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TouristSpots;
