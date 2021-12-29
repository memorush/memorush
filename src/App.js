import Main from './layouts/main/main.layout';
import Private from './layouts/private/private.layout';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch >
        <Route path="/main" component={Main} />
        <Route path="/private" component={Private} />
        <Redirect to={"/main"} />
      </Switch>
    </Router>
  );
}

export default App;
