import styles from './gallery.module.css';
import cn from 'classnames'
import slide1 from '../../../images/galery/slide1.png';

const Gallery = () => {

  return (
    <div className={styles.container}>
      <div className={styles.column}>
        <img src={slide1} alt="" srcset="" />
      </div>
      <div className={cn(styles.column, styles.info)}>
        <div className={styles.header}>
          <h1>Explain why it`s best</h1>
          <div className={styles.line}></div>
          <div className={styles.description}>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae ipsum porro, reiciendis architecto nemo accusantium molestias labore corporis necessitatibus dolorem.</p>
          </div>
          <div className={styles.line}></div>
        </div>
        <div className={styles.points}>
          <div className={styles.point}>
            <i className="fas fa-sync"></i>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
          <div className={styles.point}>
            <i className="fas fa-sync"></i>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
          <div className={styles.point}>
            <i className="fas fa-sync"></i>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
          <div className={styles.point}>
            <i className="fas fa-sync"></i>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Gallery;