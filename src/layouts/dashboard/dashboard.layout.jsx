import {Outlet} from 'react-router-dom';
import NavHeaderComponent from './components/nav-header/nav-header.component';
import styles from './dashboard.module.css';

const DashboardLayout = () => {
  return (
    <div className={styles.container}>
      <NavHeaderComponent />
      <div className={styles.content}>
        <Outlet />
      </div>
    </div>
  )
}

export default DashboardLayout;
