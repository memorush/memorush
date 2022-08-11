import Button from '../../../../common/atomic-components/button/button.component';
import styles from './hero.module.css';

const Hero = () => {
  return (
    <div id="hero" className={styles.container}>
      <div className={styles.info}>
        <div className={styles.title}>
          <h1>Это поразительно! Учеба всегда под рукой!</h1>
        </div>
        <div className={styles.subTitle}>
          <p>Скачайте наше приложение и учите иностранные слова где угодно!</p>
        </div>
      </div>
      <div className={styles.buttonContainer}>
        <Button name={"Play Market"} />
        <Button name={"App Store"} />
      </div>
    </div>
  )
}

export default Hero;
