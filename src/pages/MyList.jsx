import { useContext, useEffect, useState } from "react";
import { FaPeopleRobbery } from "react-icons/fa6";
import { MdOutlineTravelExplore } from "react-icons/md";
import { AuthContext } from "../context/AuthProvider";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const MyList = () => {
  const [myTourList, setMyTourList] = useState([]);

  const { user } = useContext(AuthContext);

  const myEmail = user?.email;

  const handleDelete = async (id) => {
    try {
      const res = await fetch(`http://localhost:5000/delete-tour/${id}`, {
        method: "DELETE",
      });

      const data = await res.json();

      if (data.deletedCount > 0) {
        setMyTourList((prevTour) => {
          return prevTour.filter((tour) => {
            return tour._id !== id;
          });
        });

        toast.success("Tour Deleted");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const getMyAllTours = async () => {
      const res = await fetch(`http://localhost:5000/my-tour/${myEmail}`);
      const data = await res.json();

      setMyTourList(data);
    };

    getMyAllTours();
  }, []);

  return (
    <section className="mt-10 mb-20">
      <h2 className="text-3xl font-bold text-center">My Tourists Spots</h2>
      {myTourList.length === 0 && (
        <h2 className="my-5 text-center text-red-600">
          You Don't Have Any Tour. Please Add One
        </h2>
      )}
      <div className="flex items-center justify-center mt-8">
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {myTourList.map((tour) => {
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
                  <div className="flex items-center justify-between mt-2">
                    <Link
                      to={`/tour-details/${tour._id}`}
                      className="px-6 text-white bg-green-500 btn hover:bg-green-600"
                    >
                      View
                    </Link>
                    <Link
                      to={`/edit-tour/${tour._id}`}
                      className="px-6 text-white bg-blue-500 btn hover:bg-blue-600"
                    >
                      Edit
                    </Link>
                    <button
                      onClick={() => handleDelete(tour._id)}
                      className="px-6 text-white bg-red-500 btn hover:bg-red-600"
                    >
                      Delete
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

export default MyList;
