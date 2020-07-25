import React from 'react';
import '../index.css';
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
                  <img class="tooltipCheckBox" src={iconsBaseUrl+'tooltip.png'}/>
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
                  <button class="button button1">
                  <div className="icon">
                  <img class="buttonIcon" src={iconsBaseUrl+value.icon}/>
                  </div>{value.name}</button>
                  <img class="tooltipIcon" src={iconsBaseUrl+'tooltip.png'}/>

                </div>
              ))}
            </div>
        </div>
      </div>
        );
        
    }
}