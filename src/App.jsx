import { Route, Routes } from "react-router";
import HomePage from "./pages/HomePage";
import MainLayout from "./layouts/MainLayout";
import UsersPage from "./pages/UsersPage";
import UserDetailPage from "./pages/UserDetailPage";
import { Toaster } from "react-hot-toast";
import NotFound from "./pages/NotFound";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/users" element={<UsersPage />} />
          <Route path="/users/:id" element={<UserDetailPage />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Toaster position="top-center" reverseOrder={false} />
    </>
  );
};

export default App;
