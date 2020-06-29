import React from "react";

import { withRouter } from "react-router";
import {navList} from './appConst/appConst';
// A simple component that shows the pathname of the current location
class GotoNext extends React.Component {
    count =1;

    next =(history)=> {
        history.push(navList[this.count++].path)
    }
  render() {
    
    const { match, location, history } = this.props;
    return ( <button className="btn btn-primary" onClick={()=>{this.next(history)}}>Proceed</button>);
  }
}

export default withRouter(GotoNext);