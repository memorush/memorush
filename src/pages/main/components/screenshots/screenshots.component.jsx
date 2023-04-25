import styles from './screenshots.module.css';
import screen1 from './images/screen1.png'
import screen2 from './images/screen2.png'
import screen3 from './images/screen3.png'
import screen4 from './images/screen4.png'
import { Slide } from "react-awesome-reveal";
import TitleAtomicComponent from '../../../../common/atomic-components/title/title.component';

const ScreenshotsComponent = () => {

  const showScreensElements = () => {
    return Array.of({ id: 1, screen: screen1 }, { id: 2, screen: screen2 }, { id: 3, screen: screen3 }, { id: 4, screen: screen4 }).map(item => {
      const { id, screen } = item;
      return <img key={id} className={styles.screen} src={screen} alt="" />
    })
  }

  return (
    <div className={styles.container}>
      <Slide cascade={true} direction='right'>
        <div className={styles.header}>
          <TitleAtomicComponent name="Дизайн приложения" />
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
