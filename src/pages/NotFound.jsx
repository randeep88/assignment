import { Link } from "react-router";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-screen bg-gray-950 text-white">
      <p className="lg:text-2xl text-xl mb-2 text-center">Oops!</p>
      <p>Page not found</p>
      <Link className="text-blue-600 underline mt-2" to={"/"}>
        Go to Home
      </Link>
    </div>
  );
};

export default NotFound;
