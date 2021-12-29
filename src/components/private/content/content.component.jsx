import {
  Route
} from "react-router-dom";
import CardList from "../card-list/card-list.component";
import Settings from "../settings/settings.component";
import Study from "../study/study.component";
import Statistic from "../statistic/statistic.component";
import EditCards from "../edit-cards/edit-cards.component";

import styles from './content.module.css';

const Content = () => {
  return (
    <div className={styles.container}>
      <Route path={"/private/card-list"} component={CardList} />
      <Route path={"/private/edit-cards"} component={EditCards} />
      <Route path={"/private/study"} component={Study} />
      <Route path={"/private/statistic"} component={Statistic} />
      <Route path={"/private/settings"} component={Settings} />
    </div>
  )
}

export default Content;