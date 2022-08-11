import { Outlet } from 'react-router-dom';
import Footer from '../common/components/footer/footer.component';
import styles from './main.module.css';
import Sidebar from '../common/components/sidebar/sidebar.component';
import Popup from '../common/components/popup/popup.component';

const MainLayout = () => {
  return (
    <div className={styles.container}>
      <Outlet />
      <Popup />
      <Sidebar />
      <Footer />
    </div>
  )
}

export default MainLayout;
