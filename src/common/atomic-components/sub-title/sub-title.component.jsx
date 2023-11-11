import styles from './sub-title.module.scss';

const SubTitleAtomicComponent = ({ name }) => {
  return (
    <div className={styles.subtitle} data-testid="subtitle-atomic-component">
      <span className={styles.subtitle__name}>{name}</span>
    </div>
  )
}

export default SubTitleAtomicComponent;
