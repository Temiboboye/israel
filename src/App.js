import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import * as Pages from "./routes";
import Fashion_Route from './pages/fashion/route';

function App() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Pages.Home} />
          <Route path="/about" component={Pages.About} />
          <Route path="/connect" component={Pages.Connect} />

          {/* PORTFOLIO */}
          <Route exact path="/portfolio" component={Pages.Portfolio} />
            {/* FASHION */}
            <Route exact path="/portfolio/fashion" component={Pages.Fashion} />
            {Fashion_Route.map((r,i)=>{
              return (
                <Route path={`/portfolio/fashion/${r.id}`} component={Pages[`Fashion${r.title}`]} />
              )
            })}
            {/* OTHERS */}
            <Route exact path="/portfolio/others" component={Pages.Others} />

          {/* ARCHIVE */}
          <Route exact path="/archive" component={Pages.Archive} />
        </Switch>
      </Router>
    );
}

export default App;
