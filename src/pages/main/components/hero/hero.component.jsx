import Button from '../../../../common/atomic-components/button/button.component';
import styles from './hero.module.css';
import backgroundImage from "./images/linus-mimietz-gvptKmonylk-unsplash.jpg";
import { Fade } from 'react-reveal';
import Title from '../../../../common/atomic-components/title/title.component';

const Hero = () => {
  return (
    <div id="hero" className={styles.container} style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className={styles.info}>
        <Fade bottom cascade>
          <div className={styles.title}>
            <Title name="Это поразительно! Учеба всегда под рукой!" />
          </div>
          <div className={styles.subTitle}>
            <p>Скачайте наше приложение и учите иностранные слова где угодно!</p>
          </div>
        </Fade>
      </div>
      <div className={styles.buttonContainer}>
        <Fade right cascade>
          <Button name={"Play Market"} />
          <Button name={"App Store"} />
        </Fade>
      </div>
    </div>
  )
}

export default Hero;
