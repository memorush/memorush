import styles from './download.module.css';
import Button from '../../../../common/components/button/button.component';

const Download = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1>Установите приложение</h1>
        <div className={styles.line} />
        <p>Установите наше приложение и начните учиться прямо сейчас!</p>
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
