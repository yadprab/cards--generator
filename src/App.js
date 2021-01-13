import "./style.css";
import { Container } from "./components/Container";
import { Route, Switch} from "react-router-dom";
import{Container2} from './components/Container2'
import { Forms } from "./components/Forms";
function App() {
  
  
  return (
    <>
      <Switch>
        <Route exact path="/" component={Container} />
        <Route exact path="/form" component={Forms} />
        <Route exact path="/generator" component={Container2} />
      </Switch>
    </>
  );
}

export default App;
