import { Link, Outlet } from 'react-router-dom';
import Button from '../../common/atomic-components/button/button.component';
import NavHeader from './components/nav-header/nav-header.component';
import styles from './dashboard.module.css';

const Dashboard = () => {
  return (
    <div className={styles.container}>
      <NavHeader />
      <div className={styles.content}>
        <Outlet />
      </div>
    </div>
  )
}

export default Dashboard;
