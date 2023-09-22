import styles from './developer.module.css';
import { Fade } from "react-awesome-reveal";
import TitleAtomicComponent from '../../../../common/atomic-components/title/title.component';

const DeveloperComponent = () => {

  return (
    <div id="developer" className={styles.container}>
      <Fade triggerOnce={true}>
        <div className={styles.header}>
          <TitleAtomicComponent name="О технологии разработки" />
          <div className={styles.line} />
          <p>Краткое описание технологий, которые легли в основу данного проекта</p>
          <div className={styles.line} />
        </div>
        <div className={styles.skills}>
          <div className={styles.skill}>
            <i className="fab fa-react"></i>
            <p>Для разработки интерактивного интерфейса использовалась библиотека React</p>
          </div>
          <div className={styles.skill}>
            <i className="fab fa-java"></i>
            <p>Вся логика и серверная часть приложения написана на Java с применение Spring Framework</p>
          </div>
          <div className={styles.skill}>
            <i className="fab fa-js"></i>
            <p>Мобильное приложение написано с использованием React Native</p>
          </div>
        </div>
      </Fade>
    </div>
  )
}

export default DeveloperComponent;
