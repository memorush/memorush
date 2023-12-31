import cn from 'classnames';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { authEntitySelector, invalidateLoggedInUser } from '../../../redux/features/auth/auth-slice';
import styles from './sidebar.module.scss';


const SidebarComponent = () => {

  // Swipe variables
  let xDown = null;
  let yDown = null;

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const { username } = useSelector(authEntitySelector);

  const toggleSidebarHandler = (isOpen) => {
    setIsOpen(!isOpen);
  }

  const onLogoutHandler = (username) => {
    if (username !== null || username.length > 0) {
      dispatch(invalidateLoggedInUser());
      navigate('main');
    }
  }

  const handleTouchStart = (evt) => {
    const firstTouch = evt.touches[0];
    xDown = firstTouch.clientX;
    yDown = firstTouch.clientY;
  };

  const handleTouchMove = (evt) => {
    if (!xDown || !yDown) {
      return;
    }

    var xUp = evt.touches[0].clientX;
    var yUp = evt.touches[0].clientY;

    var xDiff = xDown - xUp;
    var yDiff = yDown - yUp;

    if (Math.abs(xDiff) > Math.abs(yDiff)) {
      if (xDiff < 0) {
        setIsOpen(false);
      }
    }
    /* reset values */
    xDown = null;
    yDown = null;
  };

  return (
    <div
      className={styles.container}
      data-testid="sidebar-component"
      onTouchMove={(event) => handleTouchMove(event)}
      onTouchStart={(event) => handleTouchStart(event)}>
      <div
        className={cn(styles.sidebar, isOpen ? styles.open : null)}
        data-testid="sidebar"
      >
        <div
          className={styles.toggle}
          data-testid="hand-pointer-div"
          onClick={() => toggleSidebarHandler(isOpen)}>
          <i className={cn("fas fa-hand-pointer", styles.pointer)}></i>
        </div>
        <div className={styles.menu}>
          <Link
            to="/main"
            className={cn(styles.row, styles.title)}>
            <i className="fas fa-brain"></i>
            <p>Memorush</p>
          </Link>
          <Link to="/dashboard/info" className={styles.row}>
            <i className="fas fa-home"></i>
            <p>Панель управления</p>
          </Link>
          <Link to="/main/auth" className={styles.row}>
            <i className="fas fa-sign-in-alt"></i>
            <p>Войти</p>
          </Link>
          <div
            onClick={() => onLogoutHandler(username)}
            className={styles.row}
          >
            <i className="fas fa-sign-out-alt"></i>
            <p>Выйти</p>
          </div>
          <div className={styles.row}>
            <i className="fas fa-toggle-on"></i>
            <p>{isOpen ? "Открыто" : "Закрыто"}</p>
          </div>
          <div className={cn(styles.row, styles.account)}>
            <i className="fas fa-user-circle"></i>
            <p>{username !== undefined ? username : 'Гость'}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SidebarComponent;
