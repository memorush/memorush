import styles from './developer.module.css';
import Title from '../../common/title/title.component';
import SubTitle from '../../common/subTitle/subTitle.component';
import face from '../../../images/developer/face.png';

export default function Developer() {
  return (
    <div className={styles.container}>
      <Title name={"Developer"} />
      <SubTitle name={"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Exercitationem, "} />
      <div className={styles.infoContainer}>
        <img src={face} alt="" srcset="" />
        <h1>Matthey Brave</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, fugit.</p>
        <div className={styles.socialContainer}>
          <div className={styles.link}>
            <i className="fab fa-facebook"></i>
          </div>
          <div className={styles.link}>
            <i className="fab fa-twitter"></i>
          </div>
          <div className={styles.link}>
            <i class="fab fa-google-plus"></i>
          </div>
          <div className={styles.link}>
            <i className="fab fa-github"></i>
          </div>
        </div>
      </div>
    </div>
  )
}