
import Registration from "./Pages/Registration/Registration";
import Category from "./Pages/Category/Category";

import { HashRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <HashRouter>
      <Switch>
        <Route exact path="/" component={Registration} />
        <Route path="/category" component={Category} />
      </Switch>
    </HashRouter>
  );
}

export default App;
