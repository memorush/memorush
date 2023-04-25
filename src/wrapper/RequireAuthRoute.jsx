import { useLocation, Outlet, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { authStatusSelector } from "../redux/features/auth/auth-slice";

const RequireAuthRoute = () => {
  const location = useLocation();
  const authStatus = useSelector(authStatusSelector);

  if (authStatus == null) {
    return <Navigate to="/main/auth" state={{ from: location }} />;
  }

  return <Outlet />;
}

export default RequireAuthRoute;