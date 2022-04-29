import styles from './content.module.css';
import CardList from '../card-list/card-list.component';
import Study from '../study/study.component';
import Settings from '../settings/settings.component';
import CardSetList from '../card-set-list/card-set-list.component';
import {
  Route,
  Link
} from 'react-router-dom';
import Button from '../../common/button/button.component';

const Content = () => {
  return (
    <div className={styles.container}>
      <div className={styles.nav}>
        <Link to={"/private/flash-cards"}>
          <i className="fas fa-file-alt"></i>
          <Button name={"FlashCards"} style={{ width: '120px' }} />
        </Link>
        <Link to={"/private/card-set-list"}>
          <i className="fas fa-cogs"></i>
          <Button name={"Card Set"} style={{ width: '120px' }}/>
        </Link>
        <Link to={"/private/study"}>
          <i className="fas fa-graduation-cap"></i>
          <Button name={"Study"} style={{ width: '120px' }} />
        </Link>
        <Link to={"/private/settings"}>
          <i className="fas fa-cogs"></i>
          <Button name={"Settings"} style={{ width: '120px' }}/>
        </Link>
      </div>
      <div className={styles.dashboard}>
        <Route path={"/private/flash-cards"} component={CardList} />
        <Route path={"/private/study"} component={Study} />
        <Route path={"/private/card-set-list"} component={CardSetList} />
        <Route path={"/private/settings"} component={Settings} />
      </div>
    </div>
  )
}

export default Content;