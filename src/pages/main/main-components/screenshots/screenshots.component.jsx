import styles from './screenshots.module.css';
import phone from '../../main-images/galery/slide1.png';
import Slide from 'react-reveal/Slide';

const Screenshots = () => {
  return (
    <div className={styles.container}>
      <Slide bottom>
        <div className={styles.header}>
          <h1>Скриншоты</h1>
          <div className={styles.line} />
          <p>Красивый и современный дизайн</p>
          <div className={styles.line} />
        </div>
        <div className={styles.slides}>
          <img src={phone} alt="" srcset="" />
          <img src={phone} alt="" srcset="" />
        </div>
      </Slide>
    </div>
  )
}

export default Screenshots;
