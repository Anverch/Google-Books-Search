import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Search from "./pages/Search";
import Saved from "./pages/Saved";
import Navigation from "./components/Nav";
import Jumbo from "./components/Jumbotron";

function App() {
  return (
    <Router>
      <div>
        <Navigation />
        <Jumbo />
        <Switch>
          <Route exact path={["/", "/search"]}>
            <Search />
          </Route>
          <Route exact path={"/saved"}>
            <Saved />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
