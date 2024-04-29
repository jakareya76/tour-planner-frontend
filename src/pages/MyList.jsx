import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthProvider";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { Fade } from "react-awesome-reveal";

const MyList = () => {
  const [myTourList, setMyTourList] = useState([]);

  const { user } = useContext(AuthContext);

  const myEmail = user?.email;

  const handleDelete = async (id) => {
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    });

    if (result.isConfirmed) {
      try {
        const res = await fetch(`https://tour-planner-backend-ten.vercel.app/delete-tour/${id}`, {
          method: "DELETE",
        });

        const data = await res.json();

        if (data.deletedCount > 0) {
          setMyTourList((prevTour) => {
            return prevTour.filter((tour) => {
              return tour._id !== id;
            });
          });
        }
      } catch (error) {
        console.log(error);
      }
    }
  };

  useEffect(() => {
    const getMyAllTours = async () => {
      const res = await fetch(`https://tour-planner-backend-ten.vercel.app/my-tour/${myEmail}`);
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
        {/* table */}

        <div className="overflow-x-auto">
          <Fade>
            <table className="table">
              {/* head */}

              <thead>
                <tr>
                  <th>Tourists Spots Name</th>
                  <th>Country</th>
                  <th>Location</th>
                  <th>Cost</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {myTourList.map((tour) => {
                  return (
                    <tr key={tour._id}>
                      <td>{tour.TouristsSpotName}</td>
                      <td>{tour.country}</td>
                      <td>{tour.location}</td>
                      <td>{tour.cost}</td>
                      <td>
                        <Link
                          to={`/edit-tour/${tour._id}`}
                          className="px-6 text-white bg-blue-500 btn hover:bg-blue-600"
                        >
                          Update
                        </Link>
                      </td>
                      <td>
                        <button
                          onClick={() => handleDelete(tour._id)}
                          className="px-6 text-white bg-red-500 btn hover:bg-red-600"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </Fade>
        </div>
      </div>
    </section>
  );
};

export default MyList;
