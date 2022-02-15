import {
  Route,
  Redirect
} from 'react-router-dom';
import { useSelector } from "react-redux";
import { authSelector } from '../redux/features/auth/auth-slice';

const ProtectedRoute = ({ path, component }) => {

  const { authEntity } = useSelector(authSelector);

  if (authEntity.username && authEntity.token) {
    return <Route path={path} component={component} />
  } else {
    return <Redirect to={"/main"} />
  }
}

export default ProtectedRoute;