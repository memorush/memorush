import styles from './download.module.scss';
import { Link } from 'react-router-dom';
import ButtonAtomicComponent from '../../../../common/atomic-components/button/button.component';
import { Fade } from "react-awesome-reveal";
import TitleAtomicComponent from '../../../../common/atomic-components/title/title.component';
import qrConde from './images/qr-code.png'
import backgroundImage from './images/sapan-patel-i9Q9bc-WgfE-unsplash.jpg'


const DownloadComponent = () => {
  return (
    <div id="download" className={styles.download} data-testid="download" style={{backgroundImage: `url(${backgroundImage})`}}>
      <Fade triggerOnce={true}>
        <div className={styles.download__header}>
          <TitleAtomicComponent name="Установите приложение" />
          <div className={styles.download__header_line} />
          <p>Установите наше приложение и начните учиться прямо сейчас!</p>
          <p className={styles.download__header_availableText}>«Приложение временно доступно только на Android устройствах...»</p>
          <div className={styles.download__header_line} />
        </div>
        <div className={styles.download__buttons}>
          <img className={styles.download__buttons_qrConde} src={qrConde} alt="" />
          <Link className={styles.download__buttons_link} to={process.env.REACT_APP_APPGALLERY_LINK} target="_blank">
            <ButtonAtomicComponent name={"App Gallery"} />
          </Link>
        </div>
      </Fade>
      <div className={styles.download__iconContainer}>
        <div className={styles.download__iconContainer_circle}>
          <i className="fas fa-download"></i>
        </div>
      </div>
    </div>
  )
}

export default DownloadComponent;
