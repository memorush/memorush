import { useSelector } from 'react-redux';
import { useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {
  cardSetByIdSelector
} from '../../../../../redux/features/card-set/card-set.slice';
import { useReactToPrint } from 'react-to-print';
import CardItem from './components/card-item/card-item.component';
import styles from "./card-list.module.css";

const CardListPage = () => {

  const printRef = useRef();
  const navigate = useNavigate();
  const { cardSetId } = useParams();

  // Get data for card-set set with id = ...
  const { flashCardArray } = useSelector(state => cardSetByIdSelector(state, cardSetId));

  const showFlashCardItemsEl = (flashCardArray) => (
    flashCardArray.map(card => (
      <CardItem card={card} />
    ))
  )

  const saveCardSetToFile = (content, fileName, contentType) => {
    var a = document.createElement("a");
    var file = new Blob([content], { type: contentType });
    a.href = URL.createObjectURL(file);
    a.download = fileName;
    a.click();
  }

  const saveCardSetHandler = () => {
    saveCardSetToFile(JSON.stringify(flashCardArray), `card-set-${cardSetId}.txt`, 'text/plain')
  }

  const printHandler = useReactToPrint({
    content: () => printRef.current
  })

  const navigateToEditFormHandler = () => {
    navigate(`/dashboard/card-set-edit?id=${cardSetId}`)
  }

  return (
    <div className={styles.container}>
      <div className={styles.containerTitle}>
        <h3><span>{flashCardArray.length}</span> Cards in this Set</h3>
      </div>
      <div className={styles.actionsButtons}>
        <p>Press on a card for turning on</p>
        <div className={styles.buttons}>
          <i className="fas fa-edit" onClick={navigateToEditFormHandler}> Edit</i>
          <i className="fas fa-print" onClick={printHandler}> Print</i>
          <i className="fas fa-file-export" onClick={saveCardSetHandler}> Export</i>
        </div>
      </div>
      <div className={styles.cardsContainer} ref={printRef}>
        {showFlashCardItemsEl(flashCardArray)}
      </div>
    </div>
  )
}

export default CardListPage;
