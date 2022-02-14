import Content from "../../components/private/content/content.component";
import NavHeader from '../../components/private/nav-header/nav-header.component';
import Footer from '../../components/common/footer/footer.component';
import styles from './private.module.css';

const Private = () => {
  return (
    <div className={styles.container}>
      <NavHeader />
      <Content />
      <Footer />
    </div>
  )
}

export default Private;