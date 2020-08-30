import React from 'react';
import NavBar from './components/NavBar'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home'
import Projects from './components/pages/Projects';
import ContactMe from './components/pages/ContactMe';

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/projects' component={Projects}/>
          <Route path = '/contact' component={ContactMe}/>
        </Switch>
      </Router>
   </>
  );
}

export default App;
