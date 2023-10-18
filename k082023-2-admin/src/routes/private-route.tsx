import { Navigate, Outlet } from "react-router-dom";
import Cookie from "js-cookie";
import { useAppDispatch } from "@/hooks";
import { setAuthState } from "@/store/auth.slice";

const PrivateRoute = () => {
  const accessToken = Cookie.get("access_token");
  const dispatch = useAppDispatch();
  dispatch(setAuthState({ access_token: accessToken }));
  return accessToken ? <Outlet /> : <Navigate to={"/login"} />;
};

export default PrivateRoute;
