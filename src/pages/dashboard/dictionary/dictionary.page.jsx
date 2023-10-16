import { useState } from 'react';
import { useGetDictionaryByNameQuery } from "../../../redux/features/dictionary/dictionary.rtk";
import styles from "./dictionary.module.css";
import { ReactComponent as FindSvg } from './svg/loupe-search-svgrepo-com.svg';
import SpinnerLoaderComponent from '../../../common/components/spinner-loader/spinner-loader.component';

const DICTIONARY_NAME = "initial";

const DictionaryPage = () => {

  const { data, isLoading } = useGetDictionaryByNameQuery({ name: DICTIONARY_NAME });
  const [searchText, setSearchText] = useState('');

  const onInputChangeHandler = (e) => {
    setSearchText(e.target.value);
  }

  const showDictionaryItemsByName = (name) => {
    if (data !== undefined && name.length > 1) {
      const filteredItems = data?.dictionaryItems.filter(item => item.ru.includes(name) || item.en.includes(name));
      const result = filteredItems.map(item => (
        <div className={styles.dictionaryItem}>
          <div className={styles.dictionaryItem__ru}>
            <p>{item.ru}</p>
          </div>
          <div className={styles.dictionaryItem__en}>
            <p>{item.en}</p>
          </div>
          <div className={styles.dictionaryItem__tr}>
            <p>{item.tr}</p>
          </div>
        </div>
      ));
      return result.length > 0 ? result : <h1>Мы не нашли такое слово</h1>
    }
  }

  return (
    <div className={styles.dictionary} data-testid="dictionary">
      <div className={styles.searchContainer}>
        <div className={styles.svgContainer}>
          <FindSvg />
        </div>
        <h1 className={styles.dictionary__title}>Англо-Русский и Русско-Английский словарь</h1>
        <div className={styles.searchContainer__inputsContainer}>
          <input
            type="text"
            className={styles.searchContainer__input}
            placeholder='Введите слово длинною больше 1 символа'
            onChange={onInputChangeHandler}
            value={searchText}
          />
        </div>
      </div>
      <div className={styles.contentContainer}>
        {isLoading ? <SpinnerLoaderComponent /> :
          <div className={styles.dictionaryItems}>
            {showDictionaryItemsByName(searchText)}
          </div>
        }
      </div>
    </div >
  )
}

export default DictionaryPage;