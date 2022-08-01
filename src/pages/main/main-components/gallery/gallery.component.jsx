import styles from './gallery.module.css';
import cn from 'classnames'
import slide1 from '../../main-images/galery/slide1.png';

const Gallery = () => {

  return (
    <div id="gallery" className={styles.container}>
      <div className={styles.column}>
        <img src={slide1} alt="" srcset="" />
      </div>
      <div className={cn(styles.column, styles.info)}>
        <div className={styles.header}>
          <h1>Объясняем, почему это приложение лучшее!</h1>
          <div className={styles.line}></div>
          <div className={styles.description}>
            <p>Наряду с основными особенностями...</p>
          </div>
          <div className={styles.line}></div>
        </div>
        <div className={styles.points}>
          <div className={styles.point}>
            <i class="fas fa-money-bill-alt"></i>
            <p>Вы ни за что не платите</p>
          </div>
          <div className={styles.point}>
            <i class="fas fa-mobile-alt"></i>
            <p>Поддерживает большинство устройств</p>
          </div>
          <div className={styles.point}>
            <i className="fas fa-sync"></i>
            <p>Учитесь через сайт или приложение</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Gallery;
