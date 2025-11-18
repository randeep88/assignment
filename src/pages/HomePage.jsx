import { Link } from "react-router";
import "../App.css";

const HomePage = () => {
  return (
    <div className="space-y-5 w-full h-full flex items-center flex-col justify-center">
      <div className="ambient-wrapper relative">
        <div className="ambient-blob1"></div>
        <div className="ambient-blob2"></div>

        <h1 className="lg:text-5xl text-4xl font-bold text-center custom-font">
          Control Your <span className="frost-glow">Users</span> Seamlessly
        </h1>
      </div>

      <p className="lg:text-xl text-sm text-center font-semibold custom-font px-5 lg:px-0">
        Add, update, and organize user data with an intuitive and fast
        interface.
      </p>
      <ul className="flex items-center justify-center text-center lg:gap-10 sm:gap-8 gap-5 font-semibold custom-font lg:text-base text-xs px-5 lg:px-0">
        <li className="list-disc text-blue-500">Add Users Quickly</li>
        <li className="list-disc text-violet-500">Edit & Update Profiles</li>
        <li className="list-disc text-green-500">Secure & Organized Data</li>
      </ul>

      <div className="flex items-center justify-center gap-5">
        <Link to="/users">
          <button className="font-semibold text-sm lg:text-base hover:scale-105 active:scale-100 transition-all cursor-pointer bg-linear-to-br from-violet-400 to-violet-950 text-white px-5 py-2 rounded-full custom-font">
            Get Started
          </button>
        </Link>
        <Link to="/users">
          <button className="font-semibold text-sm lg:text-base hover:scale-105 active:scale-100 transition-all cursor-pointer bg-linear-to-br from-blue-400 to-blue-950 text-white px-5 py-2 rounded-full custom-font">
            View Users
          </button>
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
