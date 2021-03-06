import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './pages/home';
import Event from './pages/event';
import Header from './components/Header';
import Footer from './components/Footer';
import Map from './components/map/Map';
import 'tachyons';

function App() {
  return (
    <Router>
      
      <Route exact path='/' component={ Home } />
      <Route exact path='/event' component={ Event } />
    </Router>
  );
}

export default App;
