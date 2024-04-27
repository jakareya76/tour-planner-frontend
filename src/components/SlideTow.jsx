const SlideTow = () => {
  return (
    <div
      style={{
        backgroundImage: `url(https://images.pexels.com/photos/38238/maldives-ile-beach-sun-38238.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)`,
      }}
      className="w-full h-[calc(100vh-80px)] bg-red-500 bg-no-repeat bg-cover bg-center relative"
    >
      <div className="absolute z-10 w-full h-full bg-zinc-950 opacity-40"></div>
      <div className="absolute z-20 flex flex-col items-center justify-center w-full h-full">
        <h2 className="text-5xl font-bold text-center text-white">
          Let the journey begin
        </h2>
        <p className="max-w-2xl my-5 text-center text-gray-200">
          Your Gateway to Global Adventures! Embark on a journey of discovery
          with our curated travel experiences, immersive destinations, and
          expert insights.
        </p>
        <div className="space-x-8">
          <button className="btn btn-primary">Explore With Us</button>
          <button className="btn btn-info">Learn More</button>
        </div>
      </div>
    </div>
  );
};

export default SlideTow;
