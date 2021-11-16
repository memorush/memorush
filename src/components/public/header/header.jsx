import cn from 'classname';
import { useRef, useEffect, useState } from 'react';

import style from './header.module.css';

export default function Header() {

  const elRef = useRef(null);
  const [isScrolled, setIsScrolled] = useState(0);

  let scrollTop = null;

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
  }, []);

  // Execute when component destroyed
  useEffect(() => () => window.removeEventListener('scroll', handleScroll), []);

  const handleScroll = (event) => {
    scrollTop = event.srcElement.body.scrollTop;
    setIsScrolled(window.pageYOffset - scrollTop);
  }

  return (
    <div ref={elRef} className={cn(
      style.container,
      isScrolled > scrollTop ? style.scrolled : ''
    )}>
      <div className={style.logo}>Flashcards</div>
      <div className={style.nav}><i className="fas fa-bars"></i></div>
    </div>
  )
}