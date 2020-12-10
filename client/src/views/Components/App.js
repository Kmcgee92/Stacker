import React, { useState, useEffect } from 'react';
import  {setUser} from '../../actions/authActions'

// import ReactDOM from 'react-dom';
import { useDispatch } from 'react-redux'
import { Router, Route, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";


//main components rendered here
import Home from "./HomePage/Home.js"
import LandingPage from "./LandingPage/LandingPage.js";
import WallPage from "./WallPage/WallPage.js";
import LoginPage from "../../components/Login/LoginPage.js";
import SignupPage from "../../components/SignupPage/SignupPage.js";
import PageNotFound from "./PageNotFound/PageNotFound";
import AboutMe from "../../components/AboutMe/AboutMe.js"




var hist = createBrowserHistory();


function App() {

  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch()

  // Check to see if there is a user logged in before loading the application
  useEffect(() => {
    const loadUser = async () => {
      const res = await fetch("/api/session");
      if (res.ok) {
        res.data = await res.json(); // current user info
      dispatch(setUser(res.data.user))
      }
      setLoading(false);
    }
    loadUser();
  }, []);

  if (loading) return null;
  return (
    <>

    <Router history={hist}>
              <Switch>
                <Route exact path="/wall" component={WallPage} />
                <Route exact path="/login-page" component={LoginPage} />
                <Route exact path="/signup-page" component={SignupPage} />
                <Route exact path="/about-me" component={AboutMe} />
                <Route exact path="/home" component={Home} />
                <Route exact path="/" component={LandingPage} />
                <Route component={PageNotFound} />
              </Switch>
    </Router>

    </>
  );
}

export default App;