import style from './contacts.module.css';
import Button from '../../../../common/components/button/button.component';
import Title from '../../../../common/components/title/title.component';


export default function Contacts() {
  return (
    <div className={style.container}>
      <Title name={"Contacts"} style={{ color: 'white' }} />
      <div className={style.info}>
        <div className={style.contactContainer}>
          <div className={style.contact}>
            <h3><i className="fas fa-envelope-square"></i>1537 Flint Street Tumon, MP 96911</h3>
          </div>
          <div className={style.contact}>
            <h3><i className="fab fa-github"></i>Git-Hub</h3>
          </div>
          <div className={style.contact}>
            <h3><i class="fab fa-telegram-plane"></i>Moscow, Russia</h3>
          </div>
        </div>
        <div className={style.formContainer}>
          <input type="text" placeholder="Your name"></input>
          <input type="text" placeholder="Your email"></input>
          <input type="text" placeholder="Theme"></input>
          <input type="textarea" placeholder="Your message"></input>
          <Button name={"Send"} style={{ width: '20%' }} />
        </div>
      </div>
    </div>
  )
}
