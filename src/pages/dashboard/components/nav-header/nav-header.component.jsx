import styles from './nav-header.module.css';
import { Link } from 'react-router-dom';

const NavHeader = () => {

  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <Link to={"/"}><i className="fas fa-brain"></i> Memorush</Link>
      </div>
      <div className={styles.userContainer}>
        <i className="fas fa-sign-out-alt"></i>
      </div>
    </div>
  )
}

export default NavHeader;