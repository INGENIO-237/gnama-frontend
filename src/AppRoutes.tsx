import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "./layouts/layout";

const AppRoutes = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Layout>
            <span>Home Page</span>
          </Layout>
        }
      />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export default AppRoutes;
