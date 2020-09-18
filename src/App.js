import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Services from './Services';
import SignUp from './SignUp';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/luxuryCar' exact component={Home} />
          <Route path='/luxuryCar/services' component={Services} />
          <Route path='/luxuryCar/sign-up' component={SignUp} />
        </Switch>
      </Router>
    </>
  );
}

export default App;