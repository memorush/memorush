import styles from './hero.module.css';
import Button from '../../../../common/components/button/button.component';

const Hero = () => {
  return (
    <div className={styles.container}>
      <div className={styles.navigation}>
        <div className={styles.logo}>MemoRush</div>
        <div className={styles.navItemContainer}>
          <div className={styles.navItem}>Домой</div>
          <div className={styles.navItem}>Особенности</div>
          <div className={styles.navItem}>Галерея</div>
          <div className={styles.navItem}>Контакты</div>
          <div className={styles.navItem}>Разработчик</div>
          <div className={styles.navItem}>Обратная</div>
          <div className={styles.navItem}>Отзывы</div>
        </div>
        <div className={styles.sideBar}>
          <i className="fas fa-bars"></i>
        </div>
      </div>
      <div className={styles.info}>
        <div className={styles.title}>
          <h1>Это поразительно! Учеба всегда под рукой!</h1>
        </div>
        <div className={styles.subTitle}>
          <p>Скачайте наше приложение и учите иностранные слова где угодно!</p>
        </div>
        <div className={styles.buttonContainer}>
          <Button name={"Play Market"} />
          <Button name={"App Store"} />
        </div>
      </div>
    </div>
  )
}

export default Hero;
