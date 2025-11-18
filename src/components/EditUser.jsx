import { useState } from "react";

const EditUser = ({ setOpenEdit, selectedUser, handleEditUser }) => {
  const [name, setName] = useState(selectedUser.name);
  const [email, setEmail] = useState(selectedUser.email);
  const [phone, setPhone] = useState(selectedUser.phone);

  const submitEdit = (e) => {
    e.preventDefault();
    handleEditUser(name, email, phone);
    setOpenEdit(false);
  };

  return (
    <div className="z-50 absolute top-0 left-0 w-full h-screen flex items-center justify-center bg-black/10 backdrop-blur-sm">
      <div className="bg-gray-800 lg:p-7 p-4 rounded-lg lg:w-[30%] sm:w-[70%] w-[95%] max-h-[95%] overflow-auto">
        <h1 className="lg:text-xl text-base font-semibold lg:mb-5 mb-3">
          Edit User
        </h1>
        <form className="space-y-4" onSubmit={submitEdit}>
          <div className="flex flex-col items-start gap-2">
            <label htmlFor="name" className="text-xs lg:text-base">
              Name
            </label>
            <input
              className="w-full lg:text-base text-xs p-2 px-3 border border-gray-600 rounded-lg focus:outline-none"
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              name="name"
            />
          </div>
          <div className="flex flex-col items-start gap-2">
            <label htmlFor="email" className="text-xs lg:text-base">
              Email
            </label>
            <input
              className="w-full lg:text-base text-xs p-2 px-3 border border-gray-600 rounded-lg focus:outline-none"
              type="email"
              id="email"
              defaultValue={email}
              onChange={(e) => setEmail(e.target.value)}
              name="email"
            />
          </div>
          <div className="flex flex-col items-start gap-2">
            <label htmlFor="phone" className="text-xs lg:text-base">
              Phone
            </label>
            <input
              className="w-full lg:text-base text-xs p-2 px-3 border border-gray-600 rounded-lg focus:outline-none"
              type="text"
              id="phone"
              name="phone"
              onChange={(e) => setPhone(e.target.value)}
              value={phone}
            />
          </div>
          <p className="text-xs text-gray-400">
            This action will not update an actual user, its only for demo
            purpose.
          </p>
          <div className="flex items-center justify-end lg:gap-5 gap-2">
            <button
              onClick={() => setOpenEdit(false)}
              type="submit"
              className="lg:p-2 p-1.5 lg:px-4 px-2 lg:text-base text-xs active:scale-95 rounded-lg border border-blue-600 hover:border-blue-700 text-blue-600  transition-all"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="lg:p-2 p-1.5 lg:px-4 px-2 lg:text-base text-xs active:scale-95 rounded-lg bg-blue-600 hover:bg-blue-700 transition-all text-white"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditUser;
