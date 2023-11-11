import ApplicationRoutes from "../routes/Routes";
import { withProviders } from "./providers";
import "./index.scss";

const App = () => (
  <div className="app">
    <ApplicationRoutes />
  </div>
)

export default withProviders(App);
