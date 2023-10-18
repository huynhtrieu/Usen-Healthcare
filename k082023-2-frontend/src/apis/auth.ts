import { loginProps, registerProps } from "@/interface/auth";
import appApi from "@/utils/app-api";

const login = (payload: loginProps) => {
  return appApi.post('/login', payload);
};

const register = (payload: registerProps) => {
  return appApi.post('/register', payload);
};

export {
  login,
  register
};