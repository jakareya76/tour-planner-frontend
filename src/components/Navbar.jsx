import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="container mx-auto navbar">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/all-tourists-spot">All Tourists Spot</Link>
            </li>
            <li>
              <Link to="/add-tourists-spot">Add Tourists Spot</Link>
            </li>
            <li>
              <Link to="/my-list">My List</Link>
            </li>
          </ul>
        </div>
        <img src="/logo.png" alt="logo" className="w-[100px]" />
      </div>
      <div className="hidden navbar-center lg:flex">
        <ul className="px-1 space-x-4 menu menu-horizontal">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/all-tourists-spot">All Tourists Spot</Link>
          </li>
          <li>
            <Link to="/add-tourists-spot">Add Tourists Spot</Link>
          </li>
          <li>
            <Link to="/my-list">My List</Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <Link to="/login" className="mx-2 btn btn-primary">
          Login
        </Link>
        <Link to="/sign-up" className="mx-2 text-white btn btn-error">
          Sign Up
        </Link>

        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full">
              <img
                alt="Tailwind CSS Navbar component"
                src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
              />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
          >
            <li>
              <a>Profile</a>
            </li>
            <li>
              <a>Settings</a>
            </li>
            <li>
              <a>Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
