import React from 'react';
import { faPaperPlane,faQuestionCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export class AddonsComponent extends React.Component {
    addonsList = ['Loss History','Pro -Metrix','Address Validation','Driver License Validation'];
  
    constructor(props){
        super(props);
    }

    componentDidMount(){}

    render() {
        return (
        <div class="col-md-12 subtitle">
            <h4>Please select the addons</h4>
            <div class="items">
              {this.addonsList.map(value => (
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