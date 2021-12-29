import styles from './card.module.css';

const Card = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>Lorem, ipsum dolor.</div>
      <div className={styles.description}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus amet quibusdam praesentium nam adipisci totam!</div>
      <div className={styles.isFavorite}><i className="fas fa-star"></i></div>
    </div>
  )
}

export default Card;