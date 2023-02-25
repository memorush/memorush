import styles from './gallery.module.css';
import cn from 'classnames'
import screen5 from './images/screen5.png';
import { Slide } from "react-awesome-reveal";
import TitleAtomicComponent from '../../../../common/atomic-components/title/title.component';

const GalleryComponent = () => {

  return (
    <div id="gallery" className={styles.container}>
      <Slide cascade={true} direction='right'>
        <div className={cn(styles.column, styles.info)}>
          <div className={styles.header}>
            <TitleAtomicComponent name="Объясняем, почему это приложение лучшее!" />
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
      <Slide cascade={true} direction='left'>
        <div className={styles.column}>
          <img src={screen5} alt="no image, sorry" />
        </div>
      </Slide>
    </div>
  )
}

export default GalleryComponent;
