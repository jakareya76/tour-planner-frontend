const Destinations = () => {
  return (
    <section className="py-20">
      <h2 className="text-3xl font-bold text-center">Top Destinations</h2>
      <div className="flex items-center justify-center mt-8">
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          <div
            className="w-[300px] h-[250px] rounded-xl bg-center bg-cover bg-no-repeat"
            style={{
              backgroundImage:
                "url(https://images.pexels.com/photos/3560020/pexels-photo-3560020.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)",
            }}
          >
            <div className="flex items-center justify-center w-full h-full">
              <h3 className="text-2xl font-semibold text-white">Bangladesh</h3>
            </div>
          </div>
          <div
            className="w-[300px] h-[250px] rounded-xl bg-center bg-cover bg-no-repeat"
            style={{
              backgroundImage:
                "url(https://images.pexels.com/photos/358229/pexels-photo-358229.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)",
            }}
          >
            <div className="flex items-center justify-center w-full h-full">
              <h3 className="text-2xl font-semibold text-white">Thailand</h3>
            </div>
          </div>
          <div
            className="w-[300px] h-[250px] rounded-xl bg-center bg-cover bg-no-repeat"
            style={{
              backgroundImage:
                "url(https://images.pexels.com/photos/2166553/pexels-photo-2166553.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)",
            }}
          >
            <div className="flex items-center justify-center w-full h-full">
              <h3 className="text-2xl font-semibold text-white">Indonesia</h3>
            </div>
          </div>
          <div
            className="w-[300px] h-[250px] rounded-xl bg-center bg-cover bg-no-repeat"
            style={{
              backgroundImage:
                "url(https://images.pexels.com/photos/94420/pexels-photo-94420.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)",
            }}
          >
            <div className="flex items-center justify-center w-full h-full">
              <h3 className="text-2xl font-semibold text-white">Malaysia</h3>
            </div>
          </div>
          <div
            className="w-[300px] h-[250px] rounded-xl bg-center bg-cover bg-no-repeat"
            style={{
              backgroundImage:
                "url(https://images.pexels.com/photos/2965773/pexels-photo-2965773.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)",
            }}
          >
            <div className="flex items-center justify-center w-full h-full">
              <h3 className="text-2xl font-semibold text-white">Vietnam</h3>
            </div>
          </div>
          <div
            className="w-[300px] h-[250px] rounded-xl bg-center bg-cover bg-no-repeat"
            style={{
              backgroundImage:
                "url(https://images.pexels.com/photos/4577147/pexels-photo-4577147.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)",
            }}
          >
            <div className="flex items-center justify-center w-full h-full">
              <h3 className="text-2xl font-semibold text-white">Cambodia</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Destinations;
