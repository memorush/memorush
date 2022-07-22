import styles from './features.module.css';
import cn from 'classnames';
import phoneImage from "../../main-images/features/ipad-hand.png";

export default function Features() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1>Amazing Features</h1>
        <div className={styles.line}/>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, quae!</p>
        <div className={styles.line}/>
      </div>
      <div className={styles.features}>
        <div className={cn(styles.column, styles.start)}>
          <div className={styles.featureContainer}>
            <div className={styles.featureHeader}>
              <p>Lorem, ipsum dolor.</p>
            </div>
            <div className={styles.featureIcon}>
              <i className="fas fa-sync"></i>
            </div>
            <div className={styles.featureDescription}>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur fugit vel suscipit vero expedita rerum ut repudiandae, delectus quam molestias ex voluptatibus natus architecto dolore velit asperiores reiciendis quod id.</p>
            </div>
          </div>
          <div className={styles.featureContainer}>
            <div className={styles.featureHeader}>
              <p>Lorem, ipsum dolor.</p>
            </div>
            <div className={styles.featureIcon}>
              <i className="fas fa-sync"></i>
            </div>
            <div className={styles.featureDescription}>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur fugit vel suscipit vero expedita rerum ut repudiandae, delectus quam molestias ex voluptatibus natus architecto dolore velit asperiores reiciendis quod id.</p>
            </div>
          </div>
          <div className={styles.featureContainer}>
            <div className={styles.featureHeader}>
              <p>Lorem, ipsum dolor.</p>
            </div>
            <div className={styles.featureIcon}>
              <i className="fas fa-sync"></i>
            </div>
            <div className={styles.featureDescription}>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur fugit vel suscipit vero expedita rerum ut repudiandae, delectus quam molestias ex voluptatibus natus architecto dolore velit asperiores reiciendis quod id.</p>
            </div>
          </div>
        </div>
        <div className={cn(styles.column, styles.middle)}>
          <img src={phoneImage} alt="" srcset="" />
        </div>
        <div className={cn(styles.column, styles.end)}>
          <div className={styles.featureContainer}>
            <div className={styles.featureHeader}>
              <p>Lorem, ipsum dolor.</p>
            </div>
            <div className={styles.featureIcon}>
              <i className="fas fa-sync"></i>
            </div>
            <div className={styles.featureDescription}>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur fugit vel suscipit vero expedita rerum ut repudiandae, delectus quam molestias ex voluptatibus natus architecto dolore velit asperiores reiciendis quod id.</p>
            </div>
          </div>
          <div className={styles.featureContainer}>
            <div className={styles.featureHeader}>
              <p>Lorem, ipsum dolor.</p>
            </div>
            <div className={styles.featureIcon}>
              <i className="fas fa-sync"></i>
            </div>
            <div className={styles.featureDescription}>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur fugit vel suscipit vero expedita rerum ut repudiandae, delectus quam molestias ex voluptatibus natus architecto dolore velit asperiores reiciendis quod id.</p>
            </div>
          </div>
          <div className={styles.featureContainer}>
            <div className={styles.featureHeader}>
              <p>Lorem, ipsum dolor.</p>
            </div>
            <div className={styles.featureIcon}>
              <i className="fas fa-sync"></i>
            </div>
            <div className={styles.featureDescription}>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur fugit vel suscipit vero expedita rerum ut repudiandae, delectus quam molestias ex voluptatibus natus architecto dolore velit asperiores reiciendis quod id.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
