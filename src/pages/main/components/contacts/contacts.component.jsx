import { Fade } from "react-awesome-reveal";
import TitleAtomicComponent from '../../../../common/atomic-components/title/title.component';
import data from "../../../../assets/data/data.json";
import styles from './contacts.module.css';
import { YMaps, Map, Placemark } from "@pbe/react-yandex-maps";
import ButtonAtomicComponent from "../../../../common/atomic-components/button/button.component";

const defaultState = {
  center: [56, 36],
  zoom: 2,
};

const ContactsComponent = () => {

  const { vk, telegram, developerEmail, developerPage } = data["social-media-links"];
  const mailTo = `mailto:${developerEmail}`;

  const sendEmailHandler = (e) => {
    window.location = mailTo;
    e.preventDefault();
  }

  return (
    <div id="contacts" className={styles.contacts} data-testid="contacts">
      <Fade triggerOnce={true}>
        <TitleAtomicComponent name="Обратная связь" style={{ textAlign: 'center', color: "white" }} />
        <div className={styles.contacts__content}>
          <form className={styles.sendMailForm}>
            <label htmlFor="name">Полное имя</label>
            <input className={styles.sendMailForm__input} name="name" type="text" placeholder="Ваше имя"></input>

            <label htmlFor="name">Тема письма</label>
            <input className={styles.sendMailForm__input} name="subject" type="text" placeholder="Тема письма"></input>

            <label htmlFor="name">Ваша почта</label>
            <input className={styles.sendMailForm__input} type="email" placeholder="Ваша почта"></input>

            <label htmlFor="name">Сообщение</label>
            <textarea className={styles.sendMailForm__input} type="message" placeholder="Ваше сообщение"></textarea>
            <div className={styles.sendMailForm__buttons}>
              <ButtonAtomicComponent clickFunction={sendEmailHandler} name={"Отправить"} />
              <ButtonAtomicComponent name={"Очистить"} />
            </div>
          </form>
          <YMaps>
            <Map defaultState={defaultState} width={"100%"} height={"100%"}>
              <Placemark geometry={defaultState.center} />
            </Map>
          </YMaps>
        </div>
        <div className={styles.feedbackLinks}>
          <div className={styles.feedbackLinks__item}>
            <i className="fas fa-envelope-open"></i>
            <p className={styles.feedbackLinks__item_title} onClick={sendEmailHandler}>Напишите нам</p>
            <p className={styles.feedbackLinks__item_info}>По всем интересующим вас вопросам обращайтесь на нашу почту</p>
          </div>
          <div className={styles.feedbackLinks__item}>
            <i className="fab fa-internet-explorer"></i>
            <a className={styles.feedbackLinks__item_href} href={developerPage} target='_blank' rel='noreferrer'>
              <p className={styles.feedbackLinks__item_title}>Сайт разработчика</p>
              <p className={styles.feedbackLinks__item_info}>Поделитесь своими идеями и мыслями по работе приложения</p>
            </a>
          </div>
          <div className={styles.feedbackLinks__item}>
            <i className="fab fa-telegram"></i>
            <a className={styles.feedbackLinks__item_href} href={telegram} target='_blank' rel='noreferrer'>
              <p className={styles.feedbackLinks__item_title}>Наш телеграм канал</p>
              <p className={styles.feedbackLinks__item_info}>Все самые последние новости и уютная атмосфера</p>
            </a>
          </div>
          <div className={styles.feedbackLinks__item}>
            <i className="fab fa-vk"></i>
            <a className={styles.feedbackLinks__item_href} href={vk} target='_blank' rel='noreferrer'>
              <p className={styles.feedbackLinks__item_title}>Группа в контакте</p>
              <p className={styles.feedbackLinks__item_info}>Развивающееся сообщество активных и целеустремленных людей</p>
            </a>
          </div>
        </div>
      </Fade>
    </div>
  )
};

export default ContactsComponent;
