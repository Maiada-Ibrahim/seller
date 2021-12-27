import React from "react";
import { withAuth0 } from "@auth0/auth0-react";

import Header from "./components/Header";
import Footer from "./components/Footer";
import MainPage from "./components/mainPage";
import Profile from "./components/profile";
import AboutUs from "./components/aboutus";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
class App extends React.Component {
  render() {
    return (
      <div className="app">
      <Router>
        <Header/>
        <Switch>
          <Route exact path="/">
            {" "}
            <MainPage />{" "}
          </Route>
          <Route exact path="/profile">
            <Profile/>
          </Route>
          <Route exact path="/aboutus">
            <AboutUs />
          </Route>
        </Switch>
        <Footer/>
      </Router>
      </div>
    );
  }
}
export default withAuth0(App);