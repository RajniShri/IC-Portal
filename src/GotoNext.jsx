import React from "react";

import { withRouter } from "react-router";
import {navList} from './appConst/appConst';
// A simple component that shows the pathname of the current location
class GotoNext extends React.Component {
    count =0;
    constructor(props){
      super(props);
      this.state={
        navCoxuntReached:true};
    }

    next =(history)=> {
        for(var i=0;i<navList.length;i++){
          if(navList[i].path == history.location.pathname){
            this.count = i+1;
          }
        }
        if(this.count==navList.length-1){
          console.log(this.count,navList.length);
          this.setState({navCoxuntReached:undefined});
          console.log(this.state);
        } else {
          this.setState({navCoxuntReached:true});
        }
        
        history.push(navList[this.count].path);
    }
  render() {
    
    const { match, location, history } = this.props;

  return ( <div>{window.location.pathname!='/confirmation'&& window.location.pathname!="/"&& <button className="btn btn-primary" style={{backgroundColor: "#86BC25",borderColor:"#86BC25"}} onClick={()=>{this.next(history)}}>Proceed</button>}</div>);

  }
}

export default withRouter(GotoNext);