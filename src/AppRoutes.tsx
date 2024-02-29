import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "./layouts/layout";
import HomePage from "./pages/HomePage";
import CallBackPage from "./pages/CallBackPage";
import ProfilePage from "./pages/ProfilePage";

const AppRoutes = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Layout showHero={true}>
            <HomePage />
          </Layout>
        }
      />
      <Route
        path="/profile"
        element={
          <Layout showHero={false}>
            <ProfilePage />
          </Layout>
        }
      />
      <Route path="/auth-callback" element={<CallBackPage />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export default AppRoutes;
