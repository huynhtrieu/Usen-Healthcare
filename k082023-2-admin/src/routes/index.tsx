import MainLayout from "@/layouts/main";
import Login from "@/pages/Login_Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PrivateRoute from "./private-route";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PrivateRoute />}>
          <Route path="/*" element={<MainLayout />}></Route>
        </Route>
        <Route path="/login" element={<Login />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
