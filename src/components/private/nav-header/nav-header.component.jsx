import styles from './nav-header.module.css';
import Button from '../../common/button/button.component'

const NavHeader = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>Logo</div>
      <div className={styles.search}>
        <input type="text" name="" id="" />
        <Button name={"Search"} />
      </div>
      <div className={styles.menu}><i className="fas fa-bars"></i></div>
    </div>
  )
}

export default NavHeader;