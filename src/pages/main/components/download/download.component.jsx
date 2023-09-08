import styles from './download.module.css';
import { Link } from 'react-router-dom';
import ButtonAtomicComponent from '../../../../common/atomic-components/button/button.component';
import { Fade } from "react-awesome-reveal";
import TitleAtomicComponent from '../../../../common/atomic-components/title/title.component';
import qrConde from './images/qr-code.png'

const DownloadComponent = () => {
  return (
    <div id="download" className={styles.container}>
      <Fade triggerOnce>
        <div className={styles.header}>
          <TitleAtomicComponent name="Установите приложение" />
          <div className={styles.line} />
          <p>Установите наше приложение и начните учиться прямо сейчас!</p>
          <p className={styles.avaliableText}>«Приложение временно доступно только на Android устройствах...»</p>
          <div className={styles.line} />
        </div>
        <div className={styles.buttonContainer}>
          <img className={styles.qrConde} src={qrConde} alt="" />
          <Link to={process.env.REACT_APP_APPGALLERY_LINK} target="_blank">
            <ButtonAtomicComponent name={"App Gallery"} />
          </Link>
        </div>
      </Fade>
      <div className={styles.downloadIcon}>
        <div className={styles.innerCircle}>
          <i className="fas fa-download"></i>
        </div>
      </div>
    </div>
  )
}

export default DownloadComponent;
