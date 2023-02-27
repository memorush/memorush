import styles from './screenshots.module.css';
import screen1 from './images/screen1.png'
import screen2 from './images/screen2.png'
import screen3 from './images/screen3.png'
import screen4 from './images/screen4.png'
import { Slide } from "react-awesome-reveal";

const ScreenshotsComponent = () => {

  const showScreensElements = () => {
    return Array.of(screen1, screen2, screen3, screen4).map(screen => (
      <img className={styles.screen} src={screen} alt="" />
    ))
  }

  return (
    <div className={styles.container}>
      <Slide cascade={true} direction='right'>
        <div className={styles.header}>
          <h1>Скриншоты</h1>
          <div className={styles.line} />
          <p>Красивый и современный дизайн</p>
          <div className={styles.line} />
        </div>
        <div className={styles.screensContainer}>
          {showScreensElements()}
        </div>
      </Slide>
    </div>
  )
}

export default ScreenshotsComponent;
