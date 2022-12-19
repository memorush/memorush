import { useState } from 'react';
import cn from 'classnames';
import styles from './sidebar.module.css';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { invalidateLoggedInUser, authEntitySelector } from '../../../redux/features/auth/auth-slice';


const Sidebar = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const { username } = useSelector(authEntitySelector);

  const toggleSidebarHandler = () => {
    setIsOpen(!isOpen);
  }

  const onLogoutHandler = () => {
    if (username !== null || username.length > 0) {
      dispatch(invalidateLoggedInUser());
      navigate('main');
    }
  }

  return (
    <div className={styles.container}>
      <div className={cn(styles.sidebar, isOpen ? styles.open : null)}>
        <div className={styles.menu}>
          <Link
            to="/main"
            className={cn(styles.row, styles.title)}>
            <i className="fas fa-brain"></i>
            <p>Memorush</p>
          </Link>
          <Link to="/dashboard/card-set-list" className={styles.row}>
            <i className="fas fa-home"></i>
            <p>Панель управления</p>
          </Link>
          <Link to="/main/auth" className={styles.row}>
            <i className="fas fa-sign-in-alt"></i>
            <p>Войти</p>
          </Link>
          <div
            onClick={onLogoutHandler}
            className={styles.row}
          >
            <i className="fas fa-sign-out-alt"></i>
            <p>Выйти</p>
          </div>
          <div onClick={toggleSidebarHandler} className={styles.row}>
            <i className="fas fa-toggle-on"></i>
            <p>{isOpen ? "Закрыть" : "Открыть"}</p>
          </div>
          <div className={cn(styles.row, styles.account)}>
            <i className="fas fa-user-circle"></i>
            <p>{username !== null  ? username : 'Аккаунт'}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sidebar;