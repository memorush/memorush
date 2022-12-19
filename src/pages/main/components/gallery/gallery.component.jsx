import styles from './gallery.module.css';
import cn from 'classnames'
import slide1 from './images/slide1.png';
import Fade from 'react-reveal/Fade';
import Title from '../../../../common/atomic-components/title/title.component';

const Gallery = () => {

  return (
    <div id="gallery" className={styles.container}>
      <Fade cascade left>
        <div className={styles.column}>
          <img src={slide1} alt=""/>
        </div>
      </Fade>
      <Fade cascade right>
        <div className={cn(styles.column, styles.info)}>
          <div className={styles.header}>
            <Title name="Объясняем, почему это приложение лучшее!" />
            <div className={styles.line}></div>
            <div className={styles.description}>
              <p>Наряду с основными особенностями...</p>
            </div>
            <div className={styles.line}></div>
          </div>
          <div className={styles.points}>
            <p>Вы ни за что не платите</p>
            <p>Поддерживает большинство устройств</p>
            <p>Учитесь через сайт или приложение</p>
          </div>
        </div>
      </Fade>
    </div>
  )
}

export default Gallery;
