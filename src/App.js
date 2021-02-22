import "./styles/style.css";

import { Route, Switch,BrowserRouter} from "react-router-dom";
import { LandingPage } from "./components/Pages/LandingPage";
import { Generator } from "./components/Pages/Generator";
function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/generator" component={Generator} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
