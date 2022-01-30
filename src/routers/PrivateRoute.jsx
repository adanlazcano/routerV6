import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = () => {
  const auth = 1;

  console.log(auth);

  return auth ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;
