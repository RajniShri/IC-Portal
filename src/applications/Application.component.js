import React from 'react';
import { faPaperPlane,faQuestionCircle } from "@fortawesome/free-solid-svg-icons";
import {iconsBaseUrl} from "../config";

export class ApplicationComponent extends React.Component {

    constructor(props){
        super(props);
        this.state ={
          applicationList:[],
          versionList:[]
        }
    }

    componentDidMount(){
      this.setState({versionList:JSON.parse(sessionStorage.getItem('metadata'))[0].versions});
	    this.setState({applicationList:JSON.parse(sessionStorage.getItem('metadata'))[0].applications});
    }

    render() {
        return (
      <div>   
        <div className="col-md-12 subtitle" >
            <h6>Please select the GW Version</h6>
            <div className="items col-md-12" style={{marginTop:"0.5rem", height: "15px"}}>
              {this.state.versionList.map((value,i) => (
                <div className="col-md-3" key={i}>
                  <div>{value.name} <input type="checkbox"></input></div>
                  <img src={iconsBaseUrl+'tooltip.png'} style={{width: "15px",height: "15px",marginLeft: "8px",marginBottom: "5px"}}/>
                </div>
              ))}
            </div>
        </div>          
        <div className="col-md-12 subtitle" >
            <h6>Please select the Application</h6>
            <div className="items col-md-12" style={{marginTop:"0.1rem", height: "2px"}}></div>
            <div className="items">
              {this.state.applicationList.map((value,i) => (
                <div className="col-md-6" key={i}>
                  <div className="icon">
                  <img src={iconsBaseUrl+value.icon} style={{width: "25px",height: "25px"}}/>
                  </div>
                  <div className="icon">{value.name}</div>
                  <img src={iconsBaseUrl+'tooltip.png'} style={{width: "15px",height: "15px",marginBottom: "3px"}}/>

                </div>
              ))}
            </div>
        </div>
      </div>
        );
        
    }
}