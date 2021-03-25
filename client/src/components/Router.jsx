import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Navbar from './Navbar';

export default function Nav() {
  const [token, setToken] = useState('')

  const getToken = () => {
    // setState({ appStage: '2' }); // for testing
    setToken('token');
  };

  // Calling the function on component mount
  useEffect(() => {
    getToken();
  }, []);

  var header = (token === 'token') ? <Navbar /> : null;
  return (
    <Router>
      <div>
        <Switch>
          <Route path='/profile'>
            {/* <Profile /> */}
          </Route>
          <Route path='/'>
            {/* <Login /> */}
            <p>login/home page</p>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
