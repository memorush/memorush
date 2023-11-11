import { withLangContext } from "./withLangContext";
import { withReactRedux } from "./withReactRedux";
import { withRouter } from "./withRouter";

export const withProviders = (component) => {
  return withReactRedux(withRouter(withLangContext(component())))
}
