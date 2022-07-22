import styles from './screenshots.module.css';
import phone from '../../main-images/galery/slide1.png';


const Screenshots = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1>Screenshots</h1>
        <div className={styles.line} />
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam delectus laudantium ipsa saepe cum ullam fuga repellat, ab at atque.</p>
        <div className={styles.line} />
      </div>
      <div className={styles.slides}>
        <img src={phone} alt="" srcset="" />
        <img src={phone} alt="" srcset="" />
      </div>
    </div>
  )
}

export default Screenshots;
