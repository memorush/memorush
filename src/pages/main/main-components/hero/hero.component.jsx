import styles from './hero.module.css';
import Button from '../../../../common/components/button/button.component';

const Hero = () => {
  return (
    <div className={styles.container}>
      <div className={styles.navigation}>
        <div className={styles.logo}>Flashcards</div>
        <div className={styles.navItemContainer}>
          <div className={styles.navItem}>Home</div>
          <div className={styles.navItem}>Features</div>
          <div className={styles.navItem}>Gallery</div>
          <div className={styles.navItem}>Contacts</div>
          <div className={styles.navItem}>Developer</div>
          <div className={styles.navItem}>Subscribe</div>
          <div className={styles.navItem}>Testimonial</div>
        </div>
        <div className={styles.sideBar}>
          <i className="fas fa-bars"></i>
        </div>
      </div>
      <div className={styles.info}>
        <div className={styles.title}>
          <h1>It`s amazing! Learn Everywhere absolute for Free!</h1>
        </div>
        <div className={styles.subTitle}>
          <p>Download our application and learn various languages or another new words!</p>
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
