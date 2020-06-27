import React from 'react';
import { faPaperPlane,faQuestionCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export class ApplicationComponent extends React.Component {
    appList = ['Policy Center','OOTB Digital Portal','Claim Center','Custom Digital Portal',
    'Billing Center','Data and Analytics : DataHub/ InfoCenter','Contact Manager','Data and Analytics : Deloitte InsurSense'];
  
    constructor(props){
        super(props);
    }

    componentDidMount(){}

    render() {
        return (
        <div class="col-md-12 subtitle">
            <h4>Please select the Application?</h4>
            <div class="items">
              {this.appList.map(value => (
                <div class="col-md-6">
                  <div class="icon"><FontAwesomeIcon icon={faPaperPlane} /></div>
                  <div>{value}<FontAwesomeIcon icon={faQuestionCircle} /><input type="checkbox"></input></div>
                </div>
              ))}
            </div>
        </div>
        );
    }
}