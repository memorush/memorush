import Main from './layouts/main/main.layout';
import Private from './layouts/private/private.layout';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch >
        <Route path="/" exact={true} component={Main} />
        <Route path="/private" component={Private} />
      </Switch>
    </Router>
  );
}

export default App;
