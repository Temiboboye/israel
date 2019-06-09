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
          <Route exact path="/portfolio" component={Pages.Portfolio} />
          <Route exact path="/portfolio/fashion" component={Pages.Fashion} />
          <Route path="/portfolio/fashion/collections" component={Pages.FashionCollection} />
          <Route path="/portfolio/fashion/design" component={Pages.FashionDesign} />
        </Switch>
      </Router>
    );
}

export default App;
