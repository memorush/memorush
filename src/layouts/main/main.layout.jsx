import { Outlet } from 'react-router-dom';
import FooterComponent from '../../common/components/footer/footer.component';
import styles from './main.module.css';
import SidebarComponent from '../../common/components/sidebar/sidebar.component';
import PopupComponent from '../../common/components/popup/popup.component';

const MainLayout = () => {
  return (
    <div className={styles.container}>
      <Outlet />
      <PopupComponent />
      <SidebarComponent />
      <FooterComponent />
    </div>
  )
}

export default MainLayout;
