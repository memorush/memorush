import { Outlet } from 'react-router-dom';
import Footer from '../common/features/footer/footer.component';
import styles from './main.module.css';

const MainLayout = () => {
  return (
    <div className={styles.container}>
      <Outlet />
      <Footer />
    </div>
  )
}

export default MainLayout;