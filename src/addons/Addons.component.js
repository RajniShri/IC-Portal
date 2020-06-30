import React from 'react';
import { faPaperPlane,faQuestionCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export class AddonsComponent extends React.Component {
    addonsList = ['Loss History','Pro -Metrix','Address Validation','Driver License Validation'];
    addonsIconList = ['Loss History.png','Loss History.png','Address Validation.png','DriverLicense.png'];
    constructor(props){
        super(props);
    }

    componentDidMount(){}

    render() {
        return (
        <div className="col-md-12 subtitle">
            <h4>Please select the addons</h4>
            <div className="items">
              {this.addonsList.map((value,i) => (
                <div className="col-md-6"  key={i}>
                  <div className="icon">
                  <img src={require('./AddonsIcons/' + this.addonsIconList[i])} style={{width: "30px",height: "30px"}}/>
                  </div>
                  <div className="icon">{value}</div>
                  <img src={require('./AddonsIcons/Tooltip.png')} style={{width: "15px",height: "15px"}}/>
                </div>
              ))}
            </div>
        </div>
        );
    }
}