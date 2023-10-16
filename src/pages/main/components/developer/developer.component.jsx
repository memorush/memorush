import styles from './developer.module.css';
import { Fade } from "react-awesome-reveal";
import TitleAtomicComponent from '../../../../common/atomic-components/title/title.component';

const DeveloperComponent = () => {

  return (
    <div id="developer" className={styles.developer} data-testId="developer">
      <Fade triggerOnce={true}>
        <div className={styles.developer__header}>
          <TitleAtomicComponent name="О технологии разработки" />
          <div className={styles.developer__header_line} />
          <p>Краткое описание технологий, которые легли в основу данного проекта</p>
          <div className={styles.developer__header_line} />
        </div>
        <div className={styles.developer__skills}>
          <div className={styles.developer__skills_item}>
            <i className="fab fa-react"></i>
            <p>Для разработки интерактивного интерфейса использовалась библиотека React</p>
          </div>
          <div className={styles.developer__skills_item}>
            <i className="fab fa-java"></i>
            <p>Вся логика и серверная часть приложения написана на Java с применение Spring Framework</p>
          </div>
          <div className={styles.developer__skills_item}>
            <i className="fab fa-js"></i>
            <p>Мобильное приложение написано с использованием React Native</p>
          </div>
        </div>
      </Fade>
    </div>
  )
}

export default DeveloperComponent;
