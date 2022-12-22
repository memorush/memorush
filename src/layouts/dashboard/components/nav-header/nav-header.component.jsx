import styles from './nav-header.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { invalidateLoggedInUser } from '../../../../redux/features/auth/auth-slice';
import { Link } from 'react-router-dom';

const NavHeaderComponent = () => {

  const dispatch = useDispatch();

  const logout = () => {
    dispatch(invalidateLoggedInUser());
  }

  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <Link to={"/"}><i className="fas fa-brain"></i> Memorush</Link>
      </div>
      <div className={styles.userContainer}>
        <i className="fas fa-sign-out-alt" onClick={logout}></i>
      </div>
    </div>
  )
}

export default NavHeaderComponent;
