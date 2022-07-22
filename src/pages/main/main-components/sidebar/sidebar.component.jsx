import cn from 'classname';
import style from './sidebar.module.css';

import { Link } from 'react-router-dom';

import { useSelector, useDispatch } from 'react-redux'
import {
  toggle,
  sidebar
} from '../../../../redux/features/sidebar/sidebar-slice';

export default function Sidebar() {

  const dispatch = useDispatch();
  const { isOpen } = useSelector(sidebar);

  return (
    <div className={cn(style.container, isOpen ? style.open : '')}>
      <div className={style.menuItem}>
        <Link to={"/main/sign-in"}>Sign In</Link>
      </div>
      <div className={style.menuItem}>
        <Link to={"/main/registration"}>Registration</Link>
      </div>
      <div className={style.menuItem}>Sign Up</div>
      <div className={style.menuItem} onClick={() => dispatch(toggle())}>Close</div>
    </div>
  )
}
