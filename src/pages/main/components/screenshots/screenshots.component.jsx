import styles from './screenshots.module.css';
import screen1 from './images/screen1.png'
import screen2 from './images/screen2.png'
import screen3 from './images/screen3.png'
import screen4 from './images/screen4.png'
import { Slide } from "react-awesome-reveal";

const ScreenshotsComponent = () => {
  return (
    <div className={styles.container}>
      <Slide cascade={true} direction='right'>
        <div className={styles.header}>
          <h1>Скриншоты</h1>
          <div className={styles.line} />
          <p>Красивый и современный дизайн</p>
          <div className={styles.line} />
        </div>
        <div className={styles.slides}>
          <img src={screen1} alt=""/>
          <img src={screen2} alt=""/>
          <img src={screen3} alt=""/>
          <img src={screen4} alt=""/>
        </div>
      </Slide>
    </div>
  )
}

export default ScreenshotsComponent;
