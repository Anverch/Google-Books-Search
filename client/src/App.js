import React from "react";
// import { BrowserRouter as Router } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
// import Books from "./pages/Books";
// import Detail from "./pages/Detail";
// import NoMatch from "./pages/NoMatch";
import Navigation from "./components/Nav";

function App() {
  return (
    // <Router>
      <div>
        <Navigation />
        {/* <Switch>
          <Route exact path={["/", "/books"]}>
            <Books />
          </Route>
          <Route exact path="/books/:id">
            <Detail />
          </Route>
          <Route>
            <NoMatch />
          </Route>
        </Switch> */}
      </div>
    // </Router>
  );
}

export default App;
