import styles from './subTitle.module.css';

const SubTitle = ({name}) => {
  return (
    <div className={styles.container}>{name}</div>
  )
}

export default SubTitle;