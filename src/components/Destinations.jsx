import { useEffect, useState } from "react";

const Destinations = () => {
  const [allCountry, setAllCountry] = useState([]);

  useEffect(() => {
    const getAllCountryData = async () => {
      const res = await fetch("http://localhost:5000/all-country");
      const data = await res.json();

      setAllCountry(data);
    };

    getAllCountryData();
  }, []);

  return (
    <section>
      <h2 className="text-3xl font-bold text-center">Top Destinations</h2>
      <div className="flex items-center justify-center mt-8">
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {allCountry.map((country) => {
            return (
              <div
                key={country._id}
                className="w-[300px] relative h-[250px] rounded-xl bg-center bg-cover bg-no-repeat"
                style={{
                  backgroundImage: `url(${country.image})`,
                }}
              >
                <div className="absolute top-0 left-0 w-full h-full bg-black opacity-35 rounded-xl"></div>
                <div className="absolute flex flex-col items-center justify-center w-full h-full">
                  <h3 className="text-2xl font-semibold text-white">
                    {country.name}
                  </h3>
                  <p className="mx-4 mt-2 text-center text-white">
                    {country.description.slice(0, 65)}...
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Destinations;
