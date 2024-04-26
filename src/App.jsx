import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Navbar />
      <main className="h-screen">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default App;
