import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import * as Pages from "./routes";

function App() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Pages.Home} />
          <Route path="/about" component={Pages.About} />
          <Route path="/connect" component={Pages.Connect} />
          <Route path="/portfolio" component={Pages.Portfolio} />
        </Switch>
      </Router>
    );
}

export default App;
