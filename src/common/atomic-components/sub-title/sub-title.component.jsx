import styles from './sub-title.module.css';

const SubTitleAtomicComponent = ({name}) => {
  return (
    <div className={styles.container}>{name}</div>
  )
}

export default SubTitleAtomicComponent;
