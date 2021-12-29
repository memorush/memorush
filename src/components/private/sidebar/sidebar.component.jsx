import { useRef } from 'react';
import styles from './sidebar.module.css';

import { Link } from 'react-router-dom';

const Sidebar = () => {

  const sidebarRef = useRef(null);
  const linksContainerRef = useRef(null);

  const toggle = () => {
    sidebarRef.current.classList.toggle(styles.isClosed);
    linksContainerRef.current.classList.toggle(styles.isVisible)
  }

  return (
    <div ref={sidebarRef} className={styles.container} >
      <div
        className={styles.switcher}
        onClick={toggle}>
        <i className="fas fa-times"></i>
      </div>
      <div ref={linksContainerRef} className={styles.linksContainer}>
        <div className={styles.link}>
          <Link to={`/private/card-list`}>
            Card List
          </Link>
        </div>
        <div className={styles.link}>
          <Link to={`/private/edit-cards`}>
            Edit Cards
          </Link>
        </div>
        <div className={styles.link}>
          <Link to={`/private/study`}>
            Study
          </Link>
        </div>
        <div className={styles.link}>
          <Link to={`/private/statistic`}>
            Statistic
          </Link>
        </div>
        <div className={styles.link}>
          <Link to={`/private/settings`}>
            Settings
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Sidebar;