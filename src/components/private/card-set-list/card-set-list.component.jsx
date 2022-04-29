import styles from './card-set-list.module.css';
import { getSortedCardByCardSetSelector } from '../../../redux/features/card/cardSlice';
import { useSelector } from 'react-redux';
import CardSetItem from '../card-set-item/card-set-item.component';

const CardSetList = () => {

  const sorting = useSelector(getSortedCardByCardSetSelector);

  return (
    <div className={styles.container}>
      {Object.entries(sorting).map(([key, value]) => {
        return <CardSetItem key={key} cardSetItem={sorting[key]} />
      })}
    </div>
  )
}

export default CardSetList;