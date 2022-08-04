import { useLocation, Outlet, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { authEntitySelector } from "../redux/features/auth/auth-slice";

const RequireAuthRoute = () => {
  const location = useLocation();
  const { username, token } = useSelector(authEntitySelector);

  if (username.length === 0 && token.length === 0) {
    return <Navigate to="/main/auth" state={{ from: location }} />;
  }

  return <Outlet />;
}

export default RequireAuthRoute;