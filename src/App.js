import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './pages/home';
import Event from './pages/event';

function App() {
  return (
    <Router>
      <Route exact path='/' component={ Home } />
      <Route exact path='/event' component={ Event } />
    </Router>
  );
}

export default App;
