import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { invalidateLoggedInUser } from '../../../../redux/features/auth/auth-slice';
import styles from './nav-header.module.css';

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
        <i className="fas fa-sign-out-alt" onClick={logout} role="button"></i>
      </div>
    </div>
  )
}

export default NavHeaderComponent;
