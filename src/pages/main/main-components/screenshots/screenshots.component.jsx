import styles from './screenshots.module.css';
import phone from '../../main-images/galery/slide1.png';


const Screenshots = () => {
  return (
    <div className={styles.container}>
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
    </div>
  )
}

export default Screenshots;
