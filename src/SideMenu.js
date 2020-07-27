import React from "react";
import App from './App';
import { withRouter } from "react-router";
import { navList } from "./appConst/appConst";
// A simple component that shows the pathname of the current location
class SideMenu extends React.Component {
  count = 1;
  selectedItems = [{
    "name": "Applications",
    "navigate":"./application",
    "items": []
  },{
    "name": "Product Lines",
    "navigate":"./productline",
    "items": []
  },{
    "name": "Add Ons",
    "navigate":"./addons",
    "items": []
  }];
  constructor(props){
    super(props);
  }
  next = (history,nextRoute) => {
    history.push(nextRoute);
    this.props.parentCall();
  };
  render() {
    const { match, location, history } = this.props;
    return (
      <div >{window.location.pathname!='/confirmation'&&
        <div className="selected"><h6>Product details</h6>
        {this.selectedItems.map((value, i) => (
          <div key={i}>
            <li onClick={()=>{this.next(history,value.navigate)}}>
                {value.name}
            </li>
            {value.items.map((item, j) => (
              <div key={j}>{item}</div>
            ))}
          </div>
        ))}</div>}
      </div>
    );
  }
}

export default withRouter(SideMenu);
