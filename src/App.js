import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './pages/home';
<<<<<<< HEAD
import Header from './components/Header';
import Map from './components/map/Map';
import 'tachyons';
=======
>>>>>>> master

function App() {
  return (
    <Router>
<<<<<<< HEAD
      <Route exact path='/' component={Map} />
      <Route exact path='/' component={Header} />
=======
      <Route exact path='/' component={ Home } />
>>>>>>> master
    </Router>
  );
}

export default App;
