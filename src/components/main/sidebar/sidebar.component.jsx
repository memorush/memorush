import cn from 'classname';
import style from './sidebar.module.css';

import { Link } from 'react-router-dom';

import { useSelector, useDispatch } from 'react-redux'
import {
  toggle,
  sidebar
} from '../../../redux/features/sidebar-slice';

export default function Sidebar() {

  const dispatch = useDispatch();
  const { isOpen } = useSelector(sidebar);

  return (
    <div className={cn(style.container, isOpen ? style.open : '')}>
      <div className={style.menuItem}>
        <Link to={"/private"}>Sign In</Link>
      </div>
      <div className={style.menuItem}>Sign Up</div>
      <div className={style.menuItem} onClick={() => dispatch(toggle())}><i class="fas fa-door-open"></i>Exit</div>
    </div>
  )
}