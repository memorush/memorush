import styles from './card-set-item.module.css';

const CardSetItem = ({ cardSetItem }) => {
  return (
    <div className={styles.container}>
      {console.log(cardSetItem)}
      <h1>{cardSetItem[(Object.keys(cardSetItem)[0])].id}</h1>
    </div>
  )
}

export default CardSetItem;