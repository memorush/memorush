import styles from './found-card-set-list.module.scss';

const FoundCardSetListComponent = ({ cardList }) => {

  return (
    <div className={styles.container}>
      <table>
        <tr>
          <th>Передняя сторона</th>
          <th>Задняя сторона</th>
          <th>Подсказка</th>
        </tr>
        {cardList.map(card => (
          <tr>
            <td>{card.frontSide}</td>
            <td>{card.frontSide}</td>
            <td>{card.frontSide}</td>
          </tr>
        ))
        }
      </table>
    </div>
  )
}


export default FoundCardSetListComponent;