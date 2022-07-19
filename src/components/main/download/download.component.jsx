import styles from './download.module.css';
import Button from '../../common/button/button.component';

const Download = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1>Download App on</h1>
        <div className={styles.line} />
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam delectus laudantium ipsa saepe cum ullam fuga repellat, ab at atque.</p>
        <div className={styles.line} />
      </div>
      <div className={styles.buttonContainer}>
        <Button name={"Play Market"} />
        <Button name={"App Store"} />
      </div>
      <div className={styles.downloadIcon}>
        <div className={styles.innerCircle}>
          <i class="fas fa-download"></i>
        </div>
      </div>
    </div>
  )
}

export default Download;