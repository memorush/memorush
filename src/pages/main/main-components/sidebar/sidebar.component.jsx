import { useState } from 'react';
import cn from 'classnames';
import styles from './sidebar.module.css';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { invalidateLoggedInUser } from '../../../../redux/features/auth/auth-slice';

const Sidebar = () => {

  const dispatch = useDispatch();
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
          <Link to="/dashboard/card-set-list" className={styles.row}>
            <i className="fas fa-home"></i>
            <p>Панель управления</p>
          </Link>
          <Link to="/main/auth" className={styles.row}>
            <i class="fas fa-sign-in-alt"></i>
            <p>Войти</p>
          </Link>
          <div
            onClick={() => dispatch(invalidateLoggedInUser())}
            className={styles.row}
          >
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