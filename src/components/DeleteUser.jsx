const DeleteUser = ({ setOpenDelete, handleDeleteUser }) => {
  const onDelete = () => {
    handleDeleteUser();
    setOpenDelete(false);
  };

  return (
    <div className="z-50 absolute top-0 left-0 w-full h-screen flex items-center justify-center bg-black/10 backdrop-blur-sm">
      <div className="bg-gray-800 lg:p-7 p-4 rounded-lg lg:w-[30%] sm:w-[70%] w-[95%] max-h-[95%] overflow-auto">
        <h1 className="lg:text-xl text-base font-semibold">Delete User</h1>
        <p className="lg:text-base text-sm my-3">
          Are you sure you want to delete this user?
        </p>
        <p className="text-xs text-gray-400 mb-3">
          This action will not delete an actual user, its only for demo
          purpose.
        </p>
        <div className="flex items-center justify-end lg:gap-5 gap-2">
          <button
            onClick={() => setOpenDelete(false)}
            type="submit"
            className="lg:p-2 p-1.5 lg:px-4 px-3 lg:text-base text-sm active:scale-95 rounded-lg border border-red-600 hover:border-red-700 text-red-600  transition-all"
          >
            Cancel
          </button>
          <button
            onClick={onDelete}
            type="submit"
            className="lg:p-2 p-1.5 lg:px-4 px-3 lg:text-base text-sm active:scale-95 rounded-lg bg-red-600 hover:bg-red-700 transition-all text-white"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteUser;
