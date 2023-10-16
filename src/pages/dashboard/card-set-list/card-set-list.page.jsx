import { Link } from 'react-router-dom';
import ButtonAtomicComponent from '../../../common/atomic-components/button/button.component';
import styles from './card-set-list.module.css';
import CardSetTableComponent from './components/card-set-table/card-set-table.component';
import { ReactComponent as UserSvg } from './svg/user-svgrepo-com.svg';

const CardSetListPage = () => {

  return (
    <div className={styles.container} data-testid="card-set-list-page">
      <div className={styles.headerContainer}>
        <div className={styles.userSvgContainer}>
          <UserSvg />
        </div>
        <h1>Hello, user</h1>
      </div>
      <div className={styles.contentContainer}>
        <div className={styles.menuContainer}>
          <div className={styles.menuNavigation}>
            <Link to={"/dashboard/card-set-list"}>
              <ButtonAtomicComponent name={"Наборы"} />
            </Link>
            <Link to={"/dashboard/settings"}>
              <ButtonAtomicComponent name={`Настройки `} />
            </Link>
          </div>
        </div>
        <div className={styles.dashboardContainer}>
          <div className={styles.navigation}>
            <Link to={"/dashboard/card-set-create"} data-testid="create-page">
              <ButtonAtomicComponent name="Создать набор" />
            </Link>
            <p className={styles.hint}>Нажмите на название набора, чтобы приступить к изучению слов</p>
          </div>
          <div className={styles.tableContainer}>
            <CardSetTableComponent/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CardSetListPage;
