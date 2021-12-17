import "./styles/style.css";

import { Route, Switch, BrowserRouter } from "react-router-dom";
import { LandingPage } from "./components/Pages/LandingPage";
import { Generator } from "./components/Pages/Generator";
import { Cards } from "./components/Pages/Cards";
import { ScrollToTop } from "./components/ScrollToTop";
import { useEffect } from "react";
import { mixp } from "./Trackers/mixpanel";
function App() {
  useEffect(() => {
    mixp.getId();
   
  }, []);
  return (
    <>
      {/* routing 
       / to landing page
       /cards to select types of cards
       /generator page for cards generation for each page */}
      <BrowserRouter>
        <ScrollToTop />
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/cards" component={Cards} />
          <Route exact path="/generator/:id" component={Generator} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
