import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import * as commonService from './commonService';
import * as httpService from './httpService';

import GotoNext from './GotoNext';
import SideMenu from './SideMenu';
import {navList} from './appConst/appConst';

class App extends React.Component {
  state = {};
  constructor(props){
    super(props);
    this.state={};
  }

  componentDidMount() {
    this.setState({resp:''});
    httpService.getAppdata().then((data)=>{data.json().then((resp)=>{
      sessionStorage.setItem('metadata',JSON.stringify(resp));
      commonService.setMetadata(resp);
      this.setState({resp:resp});
	  })});
  }
 
  render() {
    return ( 
      <div className="col-md-12 col-sm-6 col-xs-8">
        <div className="title">
          <h1>InsurCloud Exchange</h1>
          <h6>Marketplace for Guidewire solutions || Powered by Guidewire</h6>
        </div>
        <div className="row">
          <div className="col-md-12 row">
            {this.state.resp && this.state.resp[0].versions[0].name && 
            <Router>
              <div className="col-md-3">
              <SideMenu />
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