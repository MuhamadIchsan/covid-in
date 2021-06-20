import React from 'react';
import HomeComponent from '../pages/HomeComponent';
import ProjectComponent from '../pages/ProjectComponent';
import ContactComponent from '../pages/ContactComponent';
import {Switch, Route} from 'react-router-dom';
import FooterComponent from './FooterComponent';
function RouterComponent() {
  return (
    <div>
      <Switch>
        <Route exact path="/">
          <HomeComponent />
          <FooterComponent />
        </Route>
        <Route path="/SearchData">
          <ProjectComponent />
          <FooterComponent />
        </Route>
        <Route path="/contact">
          <ContactComponent />
          <FooterComponent />
        </Route>
      </Switch>
    </div>
  );
}

export default RouterComponent;
