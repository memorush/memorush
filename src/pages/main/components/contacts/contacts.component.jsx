import styles from './contacts.module.css';
import TitleAtomicComponent from '../../../../common/atomic-components/title/title.component';
import { Fade, Slide } from "react-awesome-reveal";

const ContactsComponent = () => {
  return (
    <div id="contacts" className={styles.container}>
      <Fade>
        <TitleAtomicComponent name="Обратная связь" style={{ textAlign: 'center', color: "white" }} />
      </Fade>
      <div className={styles.info}>
        <Slide direction='left'>
          <div className={styles.contactContainer}>
            <div className={styles.contactItem}>
              <i className="fas fa-envelope-open"></i>
              <h4>Почта</h4>
              <p>y.dubovitsky@gmail.com</p>
            </div>
            <div className={styles.contactItem}>
              <i className="fab fa-internet-explorer"></i>
              <h4>Вебсайт</h4>
              <p>https://ydubovitsky.ru</p>
            </div>
          </div>
        </Slide>
        <Slide direction='right'>
          <div className={styles.formContainer}>
            <form action="mailto:y.dubovitsky@gmail.com">
              <input type="text" placeholder="Ваше имя"></input>
              <input type="text" placeholder="Тема письма"></input>
              <input type="textarea" placeholder="Ваше сообщение"></input>
              <div className={styles.buttons}>
                <input type="submit" value="Отправить"></input>
                <input type="reset" value="Очистить"></input>
              </div>
            </form>
          </div>
        </Slide>
      </div>
    </div>
  )
};

export default ContactsComponent;
