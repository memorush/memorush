import styles from './features.module.css';
import cn from 'classnames';
import phoneImage from "../../main-images/features/ipad-hand.png";

export default function Features() {
  return (
    <div id="features" className={styles.container}>
      <div className={styles.header}>
        <h1>Потрясающие особенности приложения</h1>
        <div className={styles.line}/>
        <p>Основные преимущества при использовании данного сервиса</p>
        <div className={styles.line}/>
      </div>
      <div className={styles.features}>
        <div className={cn(styles.column, styles.start)}>
          <div className={styles.featureContainer}>
            <div className={styles.featureHeader}>
              <p>Совместимость</p>
            </div>
            <div className={styles.featureIcon}>
              <i className="fas fa-sync"></i>
            </div>
            <div className={styles.featureDescription}>
              <p>Удобно работать с различными типами смартфонов/ планшетов.</p>
            </div>
          </div>
          <div className={styles.featureContainer}>
            <div className={styles.featureHeader}>
              <p>Поддержка, обслуживание</p>
            </div>
            <div className={styles.featureIcon}>
              <i className="fas fa-sync"></i>
            </div>
            <div className={styles.featureDescription}>
              <p>Регулярные обновления и обратная связь</p>
            </div>
          </div>
          <div className={styles.featureContainer}>
            <div className={styles.featureHeader}>
              <p>Адаптивность</p>
            </div>
            <div className={styles.featureIcon}>
              <i className="fas fa-sync"></i>
            </div>
            <div className={styles.featureDescription}>
              <p>Приложение адаптируется под ваше персональное устойство</p>
            </div>
          </div>
        </div>
        <div className={cn(styles.column, styles.middle)}>
          <img src={phoneImage} alt="" srcset="" />
        </div>
        <div className={cn(styles.column, styles.end)}>
          <div className={styles.featureContainer}>
            <div className={styles.featureHeader}>
              <p>Облачное хранение данных</p>
            </div>
            <div className={styles.featureIcon}>
              <i className="fas fa-sync"></i>
            </div>
            <div className={styles.featureDescription}>
              <p>Все ваши данные хранятся в облаке и вы их никогда не потеряете</p>
            </div>
          </div>
          <div className={styles.featureContainer}>
            <div className={styles.featureHeader}>
              <p>Автономный доступ</p>
            </div>
            <div className={styles.featureIcon}>
              <i className="fas fa-sync"></i>
            </div>
            <div className={styles.featureDescription}>
              <p>Работает без выхода в интернет</p>
            </div>
          </div>
          <div className={styles.featureContainer}>
            <div className={styles.featureHeader}>
              <p>Интуитивно понятный интерфейс</p>
            </div>
            <div className={styles.featureIcon}>
              <i className="fas fa-sync"></i>
            </div>
            <div className={styles.featureDescription}>
              <p>Ничего лишнего. Ничто не будет вас отвлекать от учебы!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
