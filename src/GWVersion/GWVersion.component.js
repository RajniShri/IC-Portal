import React from 'react';
import { faPaperPlane,faQuestionCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export class GWVersionComponent extends React.Component {
    versionList = ['9','10.0.1','10.0.2'];
  
    constructor(props){
        super(props);
    }

    componentDidMount(){}

    render() {
        return (
        <div class="col-md-12 subtitle">
            <h4>Please select the GW version</h4>
            <div class="items">
              {this.versionList.map(value => (
                <div class="col-md-4">
                  <div class="icon"><FontAwesomeIcon icon={faPaperPlane} /></div>
                  <div>{value}<FontAwesomeIcon icon={faQuestionCircle} /><input type="checkbox"></input></div>
                </div>
              ))}
            </div>
        </div>
        );
    }
}