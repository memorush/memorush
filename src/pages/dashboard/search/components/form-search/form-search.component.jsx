import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import ButtonAtomicComponent from '../../../../../common/atomic-components/button/button.component';
import { findCardSetsBySearchString } from '../../../../../redux/features/search/search.slice';
import SearchCardSetListComponent from '../search-card-set-list/search-card-set-list.component';
import styles from './form-search.module.css';
import { ReactComponent as FindSvg } from './svg/loupe-search-svgrepo-com.svg';
import { useEffect } from 'react';

const FormSearchComponent = () => {

  const dispatch = useDispatch();
  const [searchParams, setSearchParams] = useSearchParams();
  const searchString = searchParams.get("search");
  const [search, setSearch] = useState(searchString);

  /**
   * Если поисковая строка не пуста, отправляем запрос на поиск данных
   */
  useEffect(() => {
    if (searchString) {
      dispatch(findCardSetsBySearchString(search));
    }
  }, [])

  const onInputChangeHandler = (e) => {
    setSearch(e.target.value);
  }

  const onPressSearchButtonHandler = (e) => {
    dispatch(findCardSetsBySearchString(search));
    setSearchParams({
      search
    })
  }

  return (
    <div className={styles.container}>
      <div className={styles.formSearchContainer}>
        <div className={styles.svgContainer}>
          <FindSvg />
        </div>
        <h1>Найдите уже готовые наборы по ключевым словам</h1>
        <div className={styles.formInputContainer}>
          <input
            type="text"
            placeholder='Введите название набора или категории'
            onChange={onInputChangeHandler}
            value={search}
          />
          <ButtonAtomicComponent
            name="Искать"
            clickFunction={onPressSearchButtonHandler} />
        </div>
      </div>
      <div className={styles.contentContainer}>
        <div className={styles.cardSetListContainer}>
          <SearchCardSetListComponent />
        </div>
      </div>
    </div >
  )
}

export default FormSearchComponent;
