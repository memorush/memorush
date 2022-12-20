import styles from './nav-header.module.css';
import { Link } from 'react-router-dom';
import { authEntitySelector } from '../../../../redux/features/auth/auth-slice';
import { useSelector } from 'react-redux';

const NavHeader = () => {

  const { username } = useSelector(authEntitySelector);

  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <Link to={"/"}><i className="fas fa-brain"></i> Memorush</Link>
      </div>
      <div className={styles.userContainer}>
        <p>Здравствуйте, {username}!</p>
      </div>
    </div>
  )
}

export default NavHeader;