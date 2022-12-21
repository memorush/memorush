import ButtonAtomicComponent from '../../../../common/atomic-components/button/button.component';
import styles from './hero.module.css';
import backgroundImage from "./images/linus-mimietz-gvptKmonylk-unsplash.jpg";
import { Fade } from 'react-reveal';
import TitleAtomicComponent from '../../../../common/atomic-components/title/title.component';

const HeroComponent = () => {
  return (
    <div id="hero" className={styles.container} style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className={styles.info}>
        <Fade bottom cascade>
          <div className={styles.title}>
            <TitleAtomicComponent name="Это поразительно! Учеба всегда под рукой!" />
          </div>
          <div className={styles.subTitle}>
            <p>Скачайте наше приложение и учите иностранные слова где угодно!</p>
          </div>
        </Fade>
      </div>
      <div className={styles.buttonContainer}>
        <Fade right cascade>
          <ButtonAtomicComponent name={"Play Market"} />
          <ButtonAtomicComponent name={"App Store"} />
        </Fade>
      </div>
    </div>
  )
}

export default HeroComponent;
