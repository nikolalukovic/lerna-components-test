import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import { OneApp } from '@itekako/itekako-one';
import { TwoApp } from '@itekako/itekako-two';

function App() {
  return (
    <Router>
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/one">Itekako one</Link>
          </li>
          <li>
            <Link to="/two">Itekako two</Link>
          </li>
        </ul>
      </nav>

      <Switch>
        <Route path="/one">
          <OneApp />
        </Route>
        <Route path="/two">
          <TwoApp />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  </Router>
  );
}

function Home() {
  return <h2>Home</h2>;
}

export default App;
