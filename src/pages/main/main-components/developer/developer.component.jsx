import styles from './developer.module.css';

const Developer = () => {

  return (
    <div id="developer" className={styles.container}>
      <div className={styles.header}>
        <h1>О технологии разработки</h1>
        <div className={styles.line} />
        <p>Краткое описание технологий, которые легли в основу данного проекта</p>
        <div className={styles.line} />
      </div>
      <div className={styles.skills}>
        <div className={styles.skill}>
          <i class="fab fa-react"></i>
          <p>Для разработки интерактивного интерфейса использовалась библиотека React</p>
        </div>
        <div className={styles.skill}>
          <i class="fab fa-java"></i>
          <p>Вся логика и серверная часть приложения написана на Java с применение Spring Framework</p>
        </div>
        <div className={styles.skill}>
          <i class="fab fa-js"></i>
          <p>Мобильное приложение написано с использованием React Native</p>
        </div>
      </div>
    </div>
  )
}

export default Developer;