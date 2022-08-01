import { useState } from 'react';
import cn from 'classnames';
import styles from './sidebar.module.css';
import { Link } from 'react-router-dom';

const Sidebar = () => {

  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebarHandler = () => {
    setIsOpen(!isOpen);
  }

  return (
    <div className={styles.container}>
      <div className={cn(styles.sidebar, isOpen ? styles.open : null)}>
        <div className={styles.menu}>
          <Link
            to="/main"
            className={cn(styles.row, styles.title)}>
            <i class="fas fa-brain"></i>
            <p>Memorush</p>
          </Link>
          <Link to="/dashboard" className={styles.row}>
            <i className="fas fa-home"></i>
            <p>Панель управления</p>
          </Link>
          <div className={styles.row}>
            <i class="fas fa-sign-in-alt"></i>
            <p>Войти</p>
          </div>
          <div className={styles.row}>
            <i class="fas fa-sign-out-alt"></i>
            <p>Выйти</p>
          </div>
          <div onClick={toggleSidebarHandler} className={styles.row}>
            <i class="fas fa-toggle-on"></i>
            <p>{isOpen ? "Закрыть" : "Открыть"}</p>
          </div>
          <div className={cn(styles.row, styles.account)}>
            <i className="fas fa-user-circle"></i>
            <p>Аккаунт</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sidebar;