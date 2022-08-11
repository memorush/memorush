import style from './contacts.module.css';
import Button from '../../../../common/components/button/button.component';
import Title from '../../../../common/components/title/title.component';
import Slide from 'react-reveal/Slide';

export default function Contacts() {
  return (
    <div id="contacts" className={style.container}>
      <Slide bottom>
        <Title name="Обратная связь" style={{ color: 'white' }} />
        <div className={style.info}>
          <div className={style.contactContainer}>
            <div className={style.contact}>
              <h3><i className="fas fa-envelope-square"></i>Email</h3>
            </div>
            <div className={style.contact}>
              <h3><i className="fab fa-github"></i>Git-Hub</h3>
            </div>
            <div className={style.contact}>
              <h3><i class="fab fa-telegram-plane"></i>Telegram Link</h3>
            </div>
          </div>
          <div className={style.formContainer}>
            <input type="text" placeholder="Ваше имя"></input>
            <input type="text" placeholder="Ваша почта"></input>
            <input type="text" placeholder="Тема письма"></input>
            <input type="textarea" placeholder="Ваше сообщение"></input>
            <Button name="Отправить" style={{ width: '20%' }} />
          </div>
        </div>
      </Slide>
    </div>
  )
}
