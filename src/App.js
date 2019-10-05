import React from 'react';

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Home from './pages/Home';
import Recipes from './pages/Recipes';
import SingleRecipe from './pages/SingleRecipe';
import Default404 from './pages/Default404';
import NavBar from './components/NavBar';

function App() {
  return (
    <Router>
      <main>
      <NavBar />
      <Switch>
        <Route path="/" exact component={Home}></Route>
        <Route path="/recipes" exact component={Recipes} ></Route>
        <Route path="/recipes/:id" component={SingleRecipe} ></Route>
        <Route component={Default404}></Route>
      </Switch>    
      </main>
    </Router>
    
  );
}

export default App;
