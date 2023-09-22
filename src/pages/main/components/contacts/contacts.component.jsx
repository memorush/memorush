import { Fade } from "react-awesome-reveal";
import { Link } from "react-router-dom";
import TitleAtomicComponent from '../../../../common/atomic-components/title/title.component';
import styles from './contacts.module.css';

const EMAIL = "y.dubovitsky@gmail.com"

const ContactsComponent = () => {

  const sendEmailHandler = (e) => {
    window.location = `mailto:${EMAIL}`
    e.preventDefault();
  }

  return (
    <div id="contacts" className={styles.container}>
      <Fade triggerOnce={true}>
        <TitleAtomicComponent name="Обратная связь" style={{ textAlign: 'center', color: "white" }} />
        <div className={styles.info}>
          <div className={styles.contactContainer}>
            <div className={styles.contactItem}>
              <i className="fas fa-envelope-open"></i>
              <h4 onClick={sendEmailHandler}>Связаться по почте</h4>
            </div>
            <div className={styles.contactItem}>
              <i className="fab fa-internet-explorer"></i>
              <a href={"https://ydubovitsky.ru"} target='_blank' rel='noreferrer'><h4>Перейти на сайт разработчика</h4></a>
            </div>
          </div>
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
        </div>
      </Fade>
    </div>
  )
};

export default ContactsComponent;
