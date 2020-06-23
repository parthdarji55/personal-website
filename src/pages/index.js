import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Me from './Me';
import Projects from './Projects';
import Work from './Work';
import Education from './Education';

const Pages = ({ user }) => {
  return (
    <Router>
      <Switch>
        <Route exact path="/personal-website/">
          <Me user={user} />
        </Route>
        <Route path="/personal-website/projects">
          <Projects user={user} />
        </Route>
        <Route path="/personal-website/work">
          <Work user={user} />
        </Route>
        <Route path="/personal-website/education">
          <Education user={user} />
        </Route>
      </Switch>
    </Router>
  );
};

export default Pages;
 