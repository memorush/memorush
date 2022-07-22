import styles from './nav-header.module.css';
import { Link } from 'react-router-dom';

const NavHeader = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <Link to={"/"}>FlashCards</Link>
      </div>
      <div className={styles.menu}>
        <i className="fas fa-bars"></i>
      </div>
    </div>
  )
}

export default NavHeader;