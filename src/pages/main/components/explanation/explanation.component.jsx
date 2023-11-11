import styles from './explanation.module.css';
import cn from 'classnames'
import screen5 from './images/screen5.png';
import { Slide } from "react-awesome-reveal";
import TitleAtomicComponent from '../../../../common/atomic-components/title/title.component';

const ExplanationsComponent = () => {

  return (
    <div id="explanation" className={styles.explanations} data-testid="explanations">
      <Slide cascade={true} direction='right' triggerOnce={true}>
        <div className={cn(styles.explanations__column, styles.info)}>
          <div className={styles.info__title}>
            <TitleAtomicComponent name="Почему стоит выбрать именно это приложение?" />
            <div className={styles.info__line}></div>
            <div className={styles.info__subtitle}>
              <p>Наряду с основными особенностями...</p>
            </div>
            <div className={styles.info__line}></div>
          </div>
          <div className={styles.info__items}>
            <p className={styles.info__items_item}>Вы ни за что не платите</p>
            <p className={styles.info__items_item}>Поддерживает большинство устройств</p>
            <p className={styles.info__items_item}>Учитесь через сайт или приложение</p>
          </div>
        </div>
      </Slide>
      <Slide cascade={true} direction='left' triggerOnce={true}>
        <div className={styles.explanations__column}>
          <img className={styles.explanations__column_img} src={screen5} alt="" />
        </div>
      </Slide>
    </div>
  )
}

export default ExplanationsComponent;
