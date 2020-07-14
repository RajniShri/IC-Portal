import React from 'react';
import { faPaperPlane,faQuestionCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export class AddonsComponent extends React.Component {
    addonsList = ['Loss History','Pro -Metrix','Address Validation','Driver License Validation'];
    addonsIconList = ['lossHistory.png','proMetrix.png','addressValidation.png','driverLicense.png'];
    constructor(props){
        super(props);
    }

    componentDidMount(){}

    render() {
        return (
        <div className="col-md-12 subtitle">
            <h6>Please select the addons</h6>
            <div className="items">
              {this.addonsList.map((value,i) => (
                <div className="col-md-6"  key={i}>
                  <div className="icon">
                  <img src={require('./addonsIcons/' + this.addonsIconList[i])} style={{width: "25px",height: "25px"}}/>
                  </div>
                  <div className="icon">{value}</div>
                  <img src={require('./addonsIcons/tooltip.png')} style={{width: "15px",height: "15px"}}/>
                </div>
              ))}
            </div>
        </div>
        );
    }
}