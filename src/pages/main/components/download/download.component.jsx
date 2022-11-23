import styles from './download.module.css';
import Button from '../../../../common/atomic-components/button/button.component';
import Slide from 'react-reveal/Slide';
import Title from '../../../../common/atomic-components/title/title.component';

const Download = () => {
  return (
    <div id="download" className={styles.container}>
      <Slide bottom>
        <div className={styles.header}>
          <Title name="Установите приложение" />
          <div className={styles.line} />
          <p>Установите наше приложение и начните учиться прямо сейчас!</p>
          <div className={styles.line} />
        </div>
        <div className={styles.buttonContainer}>
          <Button name={"Play Market"} />
          <Button name={"App Store"} />
        </div>
      </Slide>
      <div className={styles.downloadIcon}>
        <div className={styles.innerCircle}>
          <i class="fas fa-download"></i>
        </div>
      </div>
    </div>
  )
}

export default Download;
