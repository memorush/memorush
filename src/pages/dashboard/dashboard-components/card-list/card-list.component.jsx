import Card from '../card/card.component';
import styles from './card-list.module.css';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCards, cardEntitySelector } from '../../../../redux/features/card/cardSlice';

const CardList = () => {

  const dispatch = useDispatch();
  const cardEntity = useSelector(cardEntitySelector);
  const [columnCount, setColumnCount] = useState('1fr');

  useEffect(() => {
    dispatch(getCards());
  }, []);

  const switchColumnHandler = (e) => {
    setColumnCount(e.target.value)
  }

  return (
    <div className={styles.container}>
      <div className={styles.settings}>
        <p>Select count of card column: {columnCount.split(" ").length}</p>
        <div className={styles.radioContainer}>
          <div className={styles.radio}>
            <input type="radio" id="columnOne" name="column" value="1fr" onChange={switchColumnHandler} />
            <label for="columnOne">One</label>
          </div>
          <div className={styles.radio}>
            <input type="radio" id="columnTwo" name="column" value="1fr 1fr" onChange={switchColumnHandler} />
            <label for="columnTwo">Two</label>
          </div>
          <div className={styles.radio}>
            <input type="radio" id="columnThree" name="column" value="1fr 1fr 1fr" onChange={switchColumnHandler} />
            <label for="columnThree">Three</label>
          </div>
        </div>
      </div>
      <div className={styles.cardContainer} style={{ 'grid-template-columns': `${columnCount}` }}>
        {cardEntity.map(card => <Card key={card.id} {...card} />)}
      </div>
    </div>
  )
}

export default CardList;
