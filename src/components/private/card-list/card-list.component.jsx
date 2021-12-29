import Card from '../card/card.component';
import styles from './card-list.module.css';

const CardList = () => {
  return (
    <div className={styles.container}>
      <Card />
    </div>
  )
}

export default CardList;