import styles from './hero.module.css';
import image from '../../../images/hero/ipad-hand.png';
import Button from '../../common/button/button.component';

export default function Hero() {
  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <div className={styles.title}>
          It`s amazing! Learn Everywhere absolute for Free!
        </div>
        <div className={styles.subTitle}>
          Download our application and learn various languages or another new words!
        </div>
        <div className={styles.buttonContainer}>
          <Button name={"Play Market"} style={{marginRight: '20px'}}/>
          <Button name={"App Store"} />
        </div>
      </div>
      <div className={styles.image}>
        <img src={image} alt="hands with phone" srcset="" />
      </div>
    </div>
  )
}