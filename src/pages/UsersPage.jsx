import axios from "axios";
import { Edit, Mail, Phone, Trash2, User } from "lucide-react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import EditUser from "../components/EditUser";
import DeleteUser from "../components/DeleteUser";
import toast from "react-hot-toast";

const UsersPage = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);
  const [selectedUser, setSelectedUser] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const fetchUsers = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      const data = response.data;
      console.log(data);
      setUsers(data);
    } catch (err) {
      setError(err.message);
      toast.error(err.message, {
        style: {
          color: "white",
          background: "#030712",
        },
      });
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleEditUser = async (name, email, phone) => {
    try {
      setIsLoading(true);
      await axios.put(
        `https://jsonplaceholder.typicode.com/users/${selectedUser.id}`,
        { name, email, phone }
      );
      toast.success("User updated successfully", {
        style: {
          color: "white",
          background: "#030712",
        },
      });
    } catch (err) {
      setError(err.message);
      toast.error(err.message, {
        style: {
          color: "white",
          background: "#030712",
        },
      });
    } finally {
      setIsLoading(false);
      fetchUsers();
    }
  };

  const handleDeleteUser = async () => {
    try {
      setIsLoading(true);
      await axios.delete(
        `https://jsonplaceholder.typicode.com/users/${selectedUser.id}`
      );
      toast.success("User deleted successfully", {
        style: {
          color: "white",
          background: "#030712",
        },
      });
    } catch (err) {
      setError(err.message);
      toast.error(err.message, {
        style: {
          color: "white",
          background: "#030712",
        },
      });
    } finally {
      setIsLoading(false);
      fetchUsers();
    }
  };

  if (isLoading)
    return (
      <div className="flex items-center justify-center w-full h-screen absolute top-0 left-0">
        <div className="lg:w-10 lg:h-10 w-8 h-8 border-3 border-t-blue-500 border-gray-700 rounded-full animate-spin"></div>
      </div>
    );

  if (error)
    return (
      <div className="flex items-center justify-center w-full h-screen absolute top-0 left-0">
        <div>
          <p className="text-xl font-semibold mb-1 text-center">Oops!</p>
          <p>{error}</p>
        </div>
      </div>
    );

  return (
    <div>
      <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 md:grid-cols-2 gap-3">
        {users?.map((user) => (
          <div
            key={user?.id}
            className="lg:p-5 p-3 group relative bg-gray-900 rounded-lg cursor-pointer hover:bg-gray-800/70 transition-all"
            onClick={() => navigate(`${user?.id}`)}
          >
            <div className="flex items-center justify-between gap-2 mb-2">
              <div className="flex items-center gap-2">
                <User />
                <div>
                  <p className="lg:text-lg text-sm font-semibold text-gray-100">
                    {user?.name}
                  </p>
                  <span className="text-gray-300 lg:hidden md:hidden text-xs lg:text-base">
                    @{user?.username}
                  </span>
                </div>
              </div>
              <span className="text-gray-300 hidden md:block lg:block lg:text-base text-sm">
                @{user?.username}
              </span>
            </div>
            <div className="space-y-2">
              <div className="flex text-xs lg:text-base items-center gap-2 text-gray-400">
                <Mail size={15} />
                {user?.email}
              </div>
              <div className="flex text-xs lg:text-base items-center gap-2 text-gray-400">
                <Phone size={15} />
                {user?.phone}
              </div>
            </div>

            <div
              onClick={(e) => e.stopPropagation()}
              className="absolute p-3 flex items-center bottom-0 right-0 lg:opacity-0 transition-all lg:group-hover:opacity-100"
            >
              <Edit
                className="text-gray-400 hover:text-gray-300 hover:bg-gray-900 p-1.5 rounded-lg"
                size={30}
                onClick={() => {
                  setOpenEdit(true);
                  setSelectedUser(user);
                }}
              />
              <Trash2
                className="text-gray-400 hover:text-gray-300 hover:bg-gray-900 p-1.5 rounded-lg"
                size={30}
                onClick={() => {
                  setOpenDelete(true);
                  setSelectedUser(user);
                }}
              />
            </div>
          </div>
        ))}
      </div>

      {openEdit && (
        <EditUser
          setOpenEdit={setOpenEdit}
          handleEditUser={handleEditUser}
          selectedUser={selectedUser}
        />
      )}

      {openDelete && (
        <DeleteUser
          setOpenDelete={setOpenDelete}
          handleDeleteUser={handleDeleteUser}
        />
      )}
    </div>
  );
};

export default UsersPage;
