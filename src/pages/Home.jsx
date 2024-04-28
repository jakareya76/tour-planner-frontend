import Banner from "../components/Banner";
import Destinations from "../components/Destinations";
import NewsLetter from "../components/NewsLetter";
import TouristSpots from "../components/TouristSpots";

const Home = () => {
  return (
    <main>
      <Banner />
      <TouristSpots />
      <Destinations />
      <NewsLetter />
    </main>
  );
};

export default Home;
