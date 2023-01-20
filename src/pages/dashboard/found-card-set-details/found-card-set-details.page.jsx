import { useParams } from 'react-router-dom';
import styles from './found-card-set-details.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { createNewCardSet } from '../../../redux/features/card-set/card-set.slice';
import { foundCardSetEntityByIdSelector } from '../../../redux/features/search/search.slice';
import FoundCardSetListComponent from './components/found-card-set-list/found-card-set-list.component';
import ButtonAtomicComponent from '../../../common/atomic-components/button/button.component';

const FoundCardSetDetailsPage = () => {

  const { id } = useParams();
  const { name, flashCardArray, description, tags, categoryName } = useSelector((state) => foundCardSetEntityByIdSelector(state, id));
  const dispatch = useDispatch();

  const makeACopyOfCardSetHandler = () => (
    dispatch(createNewCardSet({
      name,
      tags: tags?.map(tag => tag.name).join(","),
      categoryName,
      description,
      flashCardArray: {...flashCardArray}
    }))
  )

  return (
    <div className={styles.container}>
      <div className={styles.descriptionContainer}>
        <h1>{name}</h1>
        <ButtonAtomicComponent
          name="Сохранить этот набор"
          clickFunction={makeACopyOfCardSetHandler}
        />
      </div>
      <div className={styles.foundCardSetListContainer}>
        <FoundCardSetListComponent cardList={flashCardArray} />
      </div>
    </div>
  )
}

export default FoundCardSetDetailsPage;