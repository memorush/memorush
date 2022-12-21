import styles from './download.module.css';
import ButtonAtomicComponent from '../../../../common/atomic-components/button/button.component';
import Slide from 'react-reveal/Slide';
import TitleAtomicComponent from '../../../../common/atomic-components/title/title.component';

const DownloadComponent = () => {
  return (
    <div id="download" className={styles.container}>
      <Slide bottom>
        <div className={styles.header}>
          <TitleAtomicComponent name="Установите приложение" />
          <div className={styles.line} />
          <p>Установите наше приложение и начните учиться прямо сейчас!</p>
          <div className={styles.line} />
        </div>
        <div className={styles.buttonContainer}>
          <ButtonAtomicComponent name={"Play Market"} />
          <ButtonAtomicComponent name={"App Store"} />
        </div>
      </Slide>
      <div className={styles.downloadIcon}>
        <div className={styles.innerCircle}>
          <i className="fas fa-download"></i>
        </div>
      </div>
    </div>
  )
}

export default DownloadComponent;
