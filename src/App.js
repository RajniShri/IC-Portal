import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ApplicationComponent } from './applications/Application.component';
import { ProductLinesComponent } from './productLines/ProductLines.component';
import { GWVersionComponent } from './GWVersion/GWVersion.component';
import { AddonsComponent } from './addons/Addons.component';

class App extends React.Component {
  selectedItems = [{
      "name": "GW version",
      "navigate":"./",
      "items": ["10.0.1"]
    },{
      "name": "Applications",
      "navigate":"./application",
      "items": ["Policy Center","Billing Center"]
    },{
      "name": "Product Lines",
      "navigate":"./productline",
      "items": ["Personal Auto","Homeowners"]
    },{
      "name": "Add Ons",
      "navigate":"./addons",
      "items": ["Pro-metrix","Loss history"]
    }];

  constructor(props){
    super(props);
  }

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
        
        <div class="title">
          <h1>InsurCloud Exchange</h1>
          <h6>Marketplace for Guidewire solutions || Powered by Guidewire</h6>
        </div>
        <div class="col-md-12 row">
          <div class="col-md-2 selected">
            Product details
            {this.selectedItems.map(value=>(
              <div><li><a href={value.navigate}>{value.name}</a></li>
              {value.items.map(item=>(
                <span>{item}</span>
              ))}
              </div>
            ))}
          </div>
          <div class="col-md-9 content row">
            <Router>
              <div>
                <Switch>
                  <Route exact path="/">
                    <GWVersionComponent />
                  </Route>
                  <Route path="/application">
                    <ApplicationComponent />
                  </Route>
                  <Route path="/productline">
                    <ProductLinesComponent />
                  </Route>
                  <Route path="/addons">
                    <AddonsComponent />
                  </Route>
                </Switch>
              </div>
              
            </Router>
            
          </div>
        </div>
        <button type="button" class="btn btn-primary"><a href="./about">Proceed</a></button>
      </div>
    )
  }


}



export default App;
