import cn from 'classname';
import { useState } from 'react';
import style from './sidebar.module.css';

export default function Sidebar() {

  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebarHandler = () => {
    setIsOpen(!isOpen);
    console.log(isOpen);
  }

  return (
    <div onClick={toggleSidebarHandler} className={cn(
      style.container,
      isOpen ? style.open : ''
    )}>
      <div className={style.menuItem}>Sign In</div>
      <div className={style.menuItem}>Sign Up</div>
      <div className={style.menuItem}><i class="fas fa-door-open"></i>Exit</div>
    </div>
  )
}