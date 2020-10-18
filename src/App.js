import React,{useEffect} from "react";

import NavBar from "./NavBar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import Register from './Register';
import EmailVerification from './EmailVerification';
import {auth} from './firebase';
import {useStateValue} from './StateProvider';

function App() {

  const [{},dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged(authUser => {
      if(authUser){
        dispatch({
          type: 'SET_USER',
          user:authUser
        })
      }else{
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
  }, [])

  return (
    <Router>
      <div className="app">
        <Switch>
        {/* <Route path="/emailVerify">
            <EmailVerification />
          </Route>
        <Route path="/register">
            <Register />
          </Route> */}
        <Route path="/login">
            <Login />
          </Route>
          <Route path="/orders">
            <NavBar />
          </Route>
          <Route path="/">
            <NavBar />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
