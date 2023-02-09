import style from './contacts.module.css';
import ButtonAtomicComponent from '../../../../common/atomic-components/button/button.component';
import TitleAtomicComponent from '../../../../common/atomic-components/title/title.component';
import { Slide } from "react-awesome-reveal";

const ContactsComponent = () => {
  return (
    <div id="contacts" className={style.container}>
      <Slide bottom>
        <TitleAtomicComponent name="Обратная связь" style={{ textAlign: 'center', color: "white" }} />
      </Slide>
      <div className={style.info}>
        <Slide left cascade>
          <div className={style.contactContainer}>
            <div className={style.contactItem}>
              <i className="fas fa-map-marker-alt"></i>
              <h4>Адрес</h4>
              <p>Россия, Москва</p>
            </div>
            <div className={style.contactItem}>
              <i className="fas fa-phone"></i>
              <h4>Телефон</h4>
              <p>-</p>
            </div>
            <div className={style.contactItem}>
              <i className="fas fa-envelope-open"></i>
              <h4>Почта</h4>
              <p>y.dubovitsky@gmail.com</p>
            </div>
            <div className={style.contactItem}>
              <i className="fab fa-internet-explorer"></i>
              <h4>Вебсайт</h4>
              <p>www.y-dubovitsky.ru</p>
            </div>
          </div>
        </Slide>
        <Slide right>
          <div className={style.formContainer}>
            <input type="text" placeholder="Ваше имя"></input>
            <input type="text" placeholder="Ваша почта"></input>
            <input type="text" placeholder="Тема письма"></input>
            <input type="textarea" placeholder="Ваше сообщение"></input>
            <ButtonAtomicComponent name="Отправить" />
          </div>
        </Slide>
      </div>
    </div>
  )
};

export default ContactsComponent;
