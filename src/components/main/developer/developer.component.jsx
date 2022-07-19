import styles from './developer.module.css';
import cn from 'classnames';

const Developer = () => {

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1>About Developer</h1>
        <div className={styles.line} />
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam delectus laudantium ipsa saepe cum ullam fuga repellat, ab at atque.</p>
        <div className={styles.line} />
      </div>
      <div className={styles.skills}>
        <div className={styles.skill}>
          <i class="fab fa-react"></i>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe deleniti quos libero sit eius ut eaque voluptas, sint laboriosam fugiat?</p>
        </div>
        <div className={styles.skill}>
          <i class="fab fa-java"></i>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe deleniti quos libero sit eius ut eaque voluptas, sint laboriosam fugiat?</p>
        </div>
        <div className={styles.skill}>
          <i class="fab fa-js"></i>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe deleniti quos libero sit eius ut eaque voluptas, sint laboriosam fugiat?</p>
        </div>
      </div>
    </div>
  )
}

export default Developer;