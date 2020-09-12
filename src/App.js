import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './pages/home';
import Header from './components/Header';
import Map from './components/map/Map';
import 'tachyons';

function App() {
  return (
    <Router>
      <Route exact path='/' component={Map} />
      <Route exact path='/' component={Header} />
    </Router>
  );
}

export default App;
