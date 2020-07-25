import React from 'react';
import { faPaperPlane,faQuestionCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export class GWVersionComponent extends React.Component {
  
    constructor(props){
      super(props);
      this.state ={
        versionList:[]
      }
    }

    componentDidMount(){
	    this.setState({versionList:JSON.parse(sessionStorage.getItem('metadata'))[0].versions});
    }

    render() {
		return (<div className="col-md-12 subtitle">
            <h4>Please select the GW version</h4>
            <div className="items col-md-12">
              {this.state.versionList.length && this.state.versionList.map((value,i) => (
                <div className="col-md-3" key={i}>
                  <div className="icon"><FontAwesomeIcon icon={faPaperPlane} /></div>
                  <div>{value.name}<FontAwesomeIcon icon={faQuestionCircle} /><input type="checkbox"></input></div>
                </div>
              ))}
            </div>
        </div>)
    }
}