import Card from '../card/card.component';
import styles from './card-list.module.css';
import { useDispatch, useSelector } from 'react-redux';

const CardList = () => {
  return (
    <div className={styles.container}>
      <Card />
    </div>
  )
}

export default CardList;