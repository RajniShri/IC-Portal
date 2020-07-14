import React from 'react';
import { faPaperPlane,faQuestionCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export class ApplicationComponent extends React.Component {
    appList = ['Policy Center','OOTB Digital Portal','Claim Center','Custom Digital Portal',
    'Billing Center','Data and Analytics : DataHub/ InfoCenter','Contact Manager','Data and Analytics : Deloitte InsurSense'];
    appIconList = ['policyCenter.png','ootb_DigitalPortal.png','claimCenter.png','custom_DigitalPortal.png','billingCenter.png',
    'dataHub_Infocenter.png','contactManager.png','deloitte_InsurSense.png'];
    versionList = ['9','10.0.1','10.0.2'];
  
    constructor(props){
        super(props);
    }

    componentDidMount(){}

    render() {
        return (
      <div>   
        <div className="col-md-12 subtitle" >
            <h6>Please select the GW Version</h6>
            <div className="items col-md-12" style={{marginTop:"0.5rem", height: "15px"}}>
              {this.versionList.map((value,i) => (
                <div className="col-md-3" key={i}>
                  <div>{value} <input type="checkbox"></input></div>
                  <img src={require('./applicationLogos/tooltip.png')} style={{width: "15px",height: "15px",marginLeft: "8px",marginBottom: "5px"}}/>
                </div>
              ))}
            </div>
        </div>          
        <div className="col-md-12 subtitle" >
            <h6>Please select the Application</h6>
            <div className="items col-md-12" style={{marginTop:"0.1rem", height: "2px"}}></div>
            <div className="items">
              {this.appList.map((value,i) => (
                <div className="col-md-6" key={i}>
                  <div className="icon">
                  <img src={require('./applicationLogos/' + this.appIconList[i])} style={{width: "25px",height: "25px"}}/>
                  </div>
                  <div className="icon">{value}</div>
                  <img src={require('./applicationLogos/tooltip.png')} style={{width: "15px",height: "15px",marginBottom: "3px"}}/>
                </div>
              ))}
            </div>
        </div>
      </div>
        );
        
    }
}