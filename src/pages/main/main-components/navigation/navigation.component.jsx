import styles from './navigation.module.css';

const Navigation = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}><i class="fas fa-brain"></i> Memorush</div>
      <div className={styles.navItemContainer}>
        <div className={styles.navItem}>Домой</div>
        <div className={styles.navItem}>Особенности</div>
        <div className={styles.navItem}>Галерея</div>
        <div className={styles.navItem}>Контакты</div>
        <div className={styles.navItem}>Разработчик</div>
        <div className={styles.navItem}>Обратная</div>
        <div className={styles.navItem}>Отзывы</div>
      </div>
    </div>
  )
}

export default Navigation;