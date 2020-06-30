import React from 'react';
import { faPaperPlane,faQuestionCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export class ApplicationComponent extends React.Component {
    appList = ['Policy Center','OOTB Digital Portal','Claim Center','Custom Digital Portal',
    'Billing Center','Data and Analytics : DataHub/ InfoCenter','Contact Manager','Data and Analytics : Deloitte InsurSense'];
    appIconList = ['Policycenter.png','OOTB Dgital Portal.png','ClaimCenter.png','Custom Digital Portal.png','Billing Center.png',
    'DataHub_Infocenter.png','Contact Manager.png','Deloitte InsurSense.png']
  
    constructor(props){
        super(props);
    }

    componentDidMount(){}

    render() {
        return (
        <div className="col-md-12 subtitle">
            <h4>Please select the Application?</h4>
            <div className="items">
              {this.appList.map((value,i) => (
                <div className="col-md-6" key={i}>
                  <div className="icon">
                  <img src={require('./ApplicationLogos/' + this.appIconList[i])} style={{width: "30px",height: "30px"}}/>
                  </div>
                  <div className="icon">{value}</div>
                  <img src={require('./ApplicationLogos/Tooltip.png')} style={{width: "15px",height: "15px"}}/>
                </div>
              ))}
            </div>
        </div>
        );
    }
}