import styles from './screenshots.module.css';
import phone from '../gallery/images/slide1.png';
import { Fade } from "react-awesome-reveal";

const ScreenshotsComponent = () => {
  return (
    <div className={styles.container}>
      <Fade cascade bottom>
        <div className={styles.header}>
          <h1>Скриншоты</h1>
          <div className={styles.line} />
          <p>Красивый и современный дизайн</p>
          <div className={styles.line} />
        </div>
        <div className={styles.slides}>
          <img src={phone} alt=""/>
          <img src={phone} alt=""/>
        </div>
      </Fade>
    </div>
  )
}

export default ScreenshotsComponent;
