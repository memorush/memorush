import styles from './explanation.module.css';
import cn from 'classnames'
import screen5 from './images/screen5.png';
import { Slide } from "react-awesome-reveal";
import TitleAtomicComponent from '../../../../common/atomic-components/title/title.component';

const ExplanationsComponent = () => {

  return (
    <div id="explanation" className={styles.container}>
      <Slide cascade={true} direction='right' triggerOnce>
        <div className={cn(styles.column, styles.info)}>
          <div className={styles.header}>
            <TitleAtomicComponent name="Почему стоит выбрать именно это приложение?" />
            <div className={styles.line}></div>
            <div className={styles.description}>
              <p>Наряду с основными особенностями...</p>
            </div>
            <div className={styles.line}></div>
          </div>
          <div className={styles.points}>
            <p className={styles.point}>Вы ни за что не платите</p>
            <p className={styles.point}>Поддерживает большинство устройств</p>
            <p className={styles.point}>Учитесь через сайт или приложение</p>
          </div>
        </div>
      </Slide>
      <Slide cascade={true} direction='left' triggerOnce>
        <div className={styles.column}>
          <img className={styles.screen} src={screen5} alt=""/>
        </div>
      </Slide>
    </div>
  )
}

export default ExplanationsComponent;
