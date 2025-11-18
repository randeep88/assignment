import { useState } from "react";
import { Link } from "react-router";
import AddUserForm from "./AddUserForm";
import "../App.css";

const Navbar = () => {
  const [openForm, setOpenForm] = useState(false);

  return (
    <div className="z-50 flex items-center shadow-2xl justify-between py-4 border-b border-gray-800 lg:px-20 sm:px-10 px-3 bg-gray-900 sticky top-0 w-full">
      <h1 className="font-semibold lg:text-xl text-base custom-font">
        User Manager
      </h1>
      <div className="flex items-center lg:gap-10 gap-5">
        <Link
          className="p-1 hover:text-blue-600 transition-all text-xs lg:text-base"
          to="/"
        >
          Home
        </Link>
        <Link
          className="p-1 hover:text-blue-600 transition-all text-xs lg:text-base"
          to="/users"
        >
          Users
        </Link>
        <button
          onClick={() => setOpenForm(true)}
          className="lg:p-2 p-1.5 lg:px-4 px-2 lg:text-base text-xs rounded-lg active:scale-95 bg-blue-600 hover:bg-blue-700 transition-all text-white"
        >
          Create User
        </button>
      </div>
      {openForm && <AddUserForm setOpenForm={setOpenForm} />}
    </div>
  );
};

export default Navbar;
