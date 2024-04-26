import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="flex items-center justify-center w-full h-screen">
      <div className="flex flex-col items-center justify-center gap-4">
        <h1 className="text-3xl font-bold">404 Page Not Found!</h1>
        <Link
          to="/"
          className="px-8 text-lg text-center text-white btn btn-error"
        >
          Go Back
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
