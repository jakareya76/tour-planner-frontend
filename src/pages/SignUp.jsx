import { useState } from "react";
import { Link } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const SignUp = () => {
  const [toggleShowPassword, settoggleShowPassword] = useState(false);

  const handleSignUp = (event) => {
    event.preventDefault();
  };

  return (
    <div className="flex items-center justify-center w-full my-10">
      <div className="w-full md:w-1/2">
        <form onSubmit={handleSignUp} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="Name"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Photo URL</span>
            </label>
            <input
              type="text"
              name="photo"
              placeholder="Photo"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <div className="relative">
              <input
                type={toggleShowPassword ? "text" : "password"}
                name="password"
                placeholder="Password"
                className="w-full input input-bordered"
                required
              />
              {toggleShowPassword ? (
                <FaEye
                  size={20}
                  className="absolute cursor-pointer right-3 top-4"
                  onClick={() => settoggleShowPassword(!toggleShowPassword)}
                />
              ) : (
                <FaEyeSlash
                  size={20}
                  className="absolute cursor-pointer right-3 top-4"
                  onClick={() => settoggleShowPassword(!toggleShowPassword)}
                />
              )}
            </div>
          </div>

          <span className="mt-2 text-sm">
            Already Have An Account?
            <Link to="/login" className="ml-2 underline">
              Please Login
            </Link>
          </span>
          <div className="mt-2 form-control">
            <button type="submit" className="btn btn-primary">
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
