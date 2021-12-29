import Content from "../../components/private/content/content.component";
import Sidebar from "../../components/private/sidebar/sidebar.component";
import styles from './private.module.css';

const Private = () => {
  return (
    <div className={styles.container}>
      <div className={styles.sidebar}>
        <Sidebar />
      </div>
      <div className={styles.content}>
        <Content />
      </div>
    </div>
  )
}

export default Private;