import FormSearchComponent from './components/form-search/form-search.component';
import styles from './search.module.scss';

const SearchPage = () => {

  return (
    <div className={styles.container}>
      <FormSearchComponent />
    </div>
  )
}

export default SearchPage;