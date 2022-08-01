import { Outlet } from 'react-router-dom';
import Footer from '../common/features/footer/footer.component';
import styles from './main.module.css';
import Sidebar from '../pages/main/main-components/sidebar/sidebar.component';

const MainLayout = () => {
  return (
    <div className={styles.container}>
      <Outlet />
      <Sidebar />
      <Footer />
    </div>
  )
}

export default MainLayout;