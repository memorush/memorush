import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { foundCardSetEntitiesSelector } from '../../../../../redux/features/search/search.slice';
import styles from './search-card-set-list.module.css';

const SearchCardSetListComponent = () => {

  const foundCardSetEntities = useSelector(foundCardSetEntitiesSelector);

  const showSearchCardSetListItemComponents = () => {
    return foundCardSetEntities?.map(c =>
      <div className={styles.cardSetListItem}>
        <Link to={`/dashboard/found-card-set-details/${c.id}`}><h2>{c.name}</h2></Link>
        <p>Description: {c.description}</p>
      </div>
    )
  }

  return (
    <div className={styles.container}>
      {showSearchCardSetListItemComponents()}
    </div>
  )
}

export default SearchCardSetListComponent;
