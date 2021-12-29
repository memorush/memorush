import Roll from 'react-reveal/Roll';

import { useRef } from 'react';
import { Rerousel } from 'rerousel';

import style from './gallery.module.css';

export default function Gallery() {

  const ref = useRef(null);

  return (
    <div className={style.container}>
      <Roll left>
        <div className={style.title}>
          <h1>
            <span className={style.bbTopLeft}></span>
            <span className={style.bbTopRight}></span>
            GALLERY
            <span className={style.bbBottomLeft}></span>
            <span className={style.bbBottomRight}></span>
          </h1>
        </div>
      </Roll>
      <Rerousel itemRef={ref}>
        <img ref={ref} src="https://technext.github.io/polo/HTML/assets/img/screenshot-3.png" alt="" srcset="" />
        <img src="https://technext.github.io/polo/HTML/assets/img/screenshot-3.png" alt="" srcset="" />
        <img src="https://technext.github.io/polo/HTML/assets/img/screenshot-3.png" alt="" srcset="" />
      </Rerousel>
    </div>
  )
}