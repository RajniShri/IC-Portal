import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import GotoNext from './GotoNext';
import SideMenu from './SideMenu';
import {navList} from './appConst/appConst';

class App extends React.Component {

  myMehtod =() => {
	  const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        "username": "jason",
        "password": "my-super-secret-password"
      })
    };
    return fetch("http://localhost:4000/users/authenticate",requestOptions)   
  }

  componentDidMount() {
    this.myMehtod().then((resp)=>{resp.json().then((rep)=>{
	    this.setState({userDetails:rep});
	  })});
  }

  render() {
    return (
      <div className="container">
        <div className="title">
          <h1>InsurCloud Exchange</h1>
          <h6>Marketplace for Guidewire solutions || Powered by Guidewire</h6>
        </div>
        <div className="row">
          <div className="col-md-12 row">
            <Router>
              <div className="col-md-2">
                <SideMenu/>
              </div>
              <div className="col-md-9 content">
                <Switch>
                {navList.map((navObj)=>(<Route exact path={navObj.path} component={navObj.component} />))}
                </Switch>
                <GotoNext/>
              </div>
              
            </Router>
            </div>
          </div>
        </div>
    )
  }


}

export default App;