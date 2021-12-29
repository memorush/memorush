import Roll from 'react-reveal/Roll';

import style from './subscribe.module.css';

export default function Subscribe() {
  return (
    <div className={style.container}>
      <Roll left>
        <div className={style.title}>
          <h1>
            <span className={style.bbTopLeft}></span>
            <span className={style.bbTopRight}></span>
            Subscribe
            <span className={style.bbBottomLeft}></span>
            <span className={style.bbBottomRight}></span>
          </h1>
        </div>
      </Roll>
      <Roll right>
        <div className={style.info}>
          <h2>lorem2</h2>
          <p>The href attribute requires a valid value to be accessible. Provide a valid, navigable address as the href value. If you cannot provide a valid href, but still need the element to resemble a link, use a button</p>
          <div className={style.inputContainer}>
            <input type="text" placeholder="Your email"></input>
            <button><i className="fas fa-paper-plane"></i></button>
          </div>
        </div>
      </Roll>
    </div>
  )
}