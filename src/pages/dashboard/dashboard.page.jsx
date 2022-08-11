import { Link, Outlet } from 'react-router-dom';
import Button from '../../common/atomic-components/button/button.component';
import NavHeader from './components/nav-header/nav-header.component';
import UserInfo from './components/user-info/user-info.component';
import styles from './dashboard.module.css';

const Dashboard = () => {
  return (
    <div className={styles.container}>
      <NavHeader />
      <div className={styles.content}>
        <div className={styles.userInfo}>
          <UserInfo />
        </div>
        <div className={styles.workSpace}>
          <div className={styles.navigation}>
            <Link to={"/dashboard/card-set-list"}>
              <Button name={"Card Set"} />
            </Link>
            <Link to={"/dashboard/settings"}>
              <Button name={"Settings"} />
            </Link>
          </div>
          <div className={styles.dashboard}>
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard;
