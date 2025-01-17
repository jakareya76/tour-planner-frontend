import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash, FaFacebookF } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa6";
import { toast } from "react-toastify";

const Login = () => {
  const [toggleShowPassword, settoggleShowPassword] = useState(false);
  const { user, login, loginWithGoogle, loginWithFacebook } =
    useContext(AuthContext);

  const navigate = useNavigate();

  const handleLogin = async (event) => {
    event.preventDefault();

    const form = event.target;

    const email = form.email.value;
    const password = form.password.value;

    try {
      await login(email, password);

      navigate("/");
      toast.success("Successfully Login");
    } catch (error) {
      if (error.message === "Firebase: Error (auth/invalid-credential).") {
        toast.error("invalid credential");
      }
    }
  };

  if (user) {
    navigate("/");
  }

  return (
    <div className="flex items-center justify-center w-full my-10">
      <div className="w-full md:w-1/2">
        <form onSubmit={handleLogin} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="email"
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
            New Here
            <Link to="/sign-up" className="ml-2 underline">
              Create An Account
            </Link>
          </span>
          <div className="mt-2 form-control">
            <button type="submit" className="btn btn-primary">
              Login
            </button>
          </div>
          <div className="flex items-center justify-center gap-5 my-5">
            <button
              type="button"
              onClick={() => loginWithGoogle()}
              className="flex items-center justify-center w-1/2 gap-3 py-4 font-medium border-2 bg-base-200 rounded-xl"
            >
              <FaGoogle size={20} /> Sign In With Google
            </button>
            <button
              type="button"
              onClick={() => loginWithFacebook()}
              className="flex items-center justify-center w-1/2 gap-3 py-4 font-medium border-2 bg-base-200 rounded-xl"
            >
              <FaFacebookF size={20} /> Sign In With Facebook
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
