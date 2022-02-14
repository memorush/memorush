import cn from 'classname';
import { useRef, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import {
  toggle
} from '../../../redux/features/sidebar/sidebar-slice';

import style from './header.module.css';

export default function Header() {

  const dispatch = useDispatch();

  return (
    <div className={style.container}>
      <div className={style.logo}>Flashcards</div>
      <div className={style.navItemContainer}>
        <div className={style.navItem}>Home</div>
        <div className={style.navItem}>Features</div>
        <div className={style.navItem}>Gallery</div>
        <div className={style.navItem}>Contacts</div>
        <div className={style.navItem}>Developer</div>
        <div className={style.navItem}>Subscribe</div>
        <div className={style.navItem}>Testimonial</div>
      </div>
      <div className={style.sideBar}>
        <i onClick={() => dispatch(toggle())} className="fas fa-bars"></i>
      </div>
    </div>
  )
}