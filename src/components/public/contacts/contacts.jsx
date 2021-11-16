import Roll from 'react-reveal/Roll';

import style from './contacts.module.css';

export default function Contacts() {
  return (
    <div className={style.container}>
      <Roll left>
        <div className={style.title}>
          <h1>
            <span className={style.bbTopLeft}></span>
            <span className={style.bbTopRight}></span>
            Contacts
            <span className={style.bbBottomLeft}></span>
            <span className={style.bbBottomRight}></span>
          </h1>
        </div>
      </Roll>
      <Roll right>
        <div className={style.info}>
          <div className={style.contactContainer}>
            <div className={style.contact}>
              <h3><i className="fas fa-envelope-square"></i>1537 Flint Street Tumon, MP 96911</h3>
            </div>
            <div className={style.contact}>
              <h3><i className="fab fa-github"></i>Git-Hub</h3>
            </div>
            <div className={style.contact}>
              <h3><i class="fas fa-location-arrow"></i>Moscow, Russia</h3>
            </div>
          </div>
          <div className={style.formContainer}>
            <input type="text" placeholder="Your name"></input>
            <input type="text" placeholder="Your email"></input>
            <input type="text" placeholder="Theme"></input>
            <input type="textarea" placeholder="Your message"></input>
            <button className={style.button}>Send</button>
          </div>
        </div>
      </Roll>
    </div>
  )
}