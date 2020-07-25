import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import GotoNext from './GotoNext';
import SideMenu from './SideMenu';
import {navList} from './appConst/appConst';

class App extends React.Component {
  state = {};
  constructor(props){
    super(props);
    this.state={};
  }

  myMehtod =() => {
	  const requestOptions = {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' }
    };
    return fetch("http://localhost:4000/metadata/getmetadata",requestOptions)   
  }

  callingParent(){
    console.log('inside testcall');
    
  }

  componentDidMount() {
    this.setState({resp:''});
    this.myMehtod().then((data)=>{data.json().then((resp)=>{
      sessionStorage.setItem('metadata',JSON.stringify(resp));
      console.log('in app js');
      this.setState({resp:resp});
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
            {this.state.resp && this.state.resp[0].versions[0].name && 
            <Router>
              <div className="col-md-2">
                <SideMenu parentCall={this.callingParent}/>
              </div>
              <div className="col-md-9 content">
                <Switch>
                {navList.map((navObj,i)=>(<Route exact path={navObj.path} component={navObj.component} key={i} />))}
                </Switch>
                <GotoNext/>
              </div>
              
            </Router>}
            </div>
          </div>
        </div>
    )}
}

export default App;