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
      <Router basename={"/luxuryCar"}>
        <Navbar />
        <Switch>
          <Route path={`${process.env.PUBLIC_URL}/`} exact component={Home} />
          <Route path={`${process.env.PUBLIC_URL}/services`} component={Services} />
          <Route path={`${process.env.PUBLIC_URL}/sign-up`} component={SignUp} />
        </Switch>
      </Router>
    </>
  );
}

export default App;