import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import React, { lazy, Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import './app.css';
import Footer from './partials/footer';
import Header from './partials/header';

const Homepage = lazy(() => import("./screens/home"));

library.add(fab, faEnvelope)

export const App = () => {

  return (
    <div className="app">
      <Header></Header>
      <Suspense fallback={<div>Loading...</div>}>

        <Switch>
          <Route path="/" component={Homepage} />
          <Route path="*">
            <Redirect to="/"></Redirect>
          </Route>
        </Switch>

      </Suspense>

      <Footer></Footer>
    </div>
  );
}
