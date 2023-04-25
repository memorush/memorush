import styles from './sub-title.module.css';

const SubTitleAtomicComponent = ({name}) => {
  return (
    <div className={styles.container} data-testid="subtitle-atomic-component">{name}</div>
  )
}

export default SubTitleAtomicComponent;
