import { ArrowLeft } from "lucide-react";
import { useNavigate, useParams } from "react-router";
import { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { User } from "lucide-react";

const UserDetailPage = () => {
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const { id } = useParams();
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const fetchUser = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/users/${id}`
      );
      const data = response.data;
      console.log(data);
      setUser(data);
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
    fetchUser();
  }, []);

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
      <div className="flex items-center lg:gap-5 gap-2">
        <button
          onClick={() => navigate(-1)}
          className="text-gray-100 cursor-pointer p-2 hover:bg-gray-800 transition-all active:scale-95 rounded-full"
        >
          <ArrowLeft className="hidden lg:block md:block" />
          <ArrowLeft size={16} className="lg:hidden md:hidden" />
        </button>
        <h1 className="lg:text-2xl text-base font-bold">User Detail</h1>
      </div>
      <div className="border border-gray-900 p-5 w-full rounded-lg mt-5 space-y-3">
        <div className="flex items-center justify-between gap-2 mb-5">
          <div className="flex items-center gap-2">
            <User size={40} />
            <div>
              <p className="lg:text-2xl text-base font-semibold text-gray-100">
                {user?.name}
              </p>
              <span className="text-gray-300 mb-4 text-xs lg:text-base">
                @{user?.username}
              </span>
            </div>
          </div>
        </div>

        <div className="lg:flex md:flex md:gap-5 w-full text-xs lg:text-base">
          <div className="space-y-2 w-full mb-2 lg:mb-0 md:mb-0">
            <div className="flex items-center justify-between text-gray-400">
              <span>Email:</span>
              <span>{user?.email}</span>
            </div>
            <div className="flex items-center justify-between text-gray-400">
              <span>Phone:</span>
              <span>{user?.phone}</span>
            </div>
            <div className="flex items-center justify-between text-gray-400">
              <span>Website:</span>
              <span>{user?.website}</span>
            </div>
            <div className="flex items-center justify-between text-gray-400">
              <span>Address:</span>
              <span>{user?.address?.city}</span>
            </div>
          </div>
          <div className="space-y-2 w-full">
            <div className="flex items-center justify-between text-gray-400">
              <span>Zipcode:</span>
              <span>{user?.address?.zipcode}</span>
            </div>
            <div className="flex items-center justify-between text-gray-400">
              <span>Street:</span>
              <span>{user?.address?.street}</span>
            </div>
            <div className="flex items-center justify-between text-gray-400">
              <span>Suite:</span>
              <span>{user?.address?.suite}</span>
            </div>
            <div className="flex items-center justify-between text-gray-400">
              <span>Company:</span>
              <span>{user?.company?.name}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDetailPage;
