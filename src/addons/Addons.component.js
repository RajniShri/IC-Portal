import React from 'react';
import '../index.css';
import {iconsBaseUrl} from "../config";

export class AddonsComponent extends React.Component {

    constructor(props){
        super(props);
        this.state ={
          addonsList:[]
        }
    }

    componentDidMount(){
      this.setState({addonsList:JSON.parse(sessionStorage.getItem('metadata'))[0].addons});
    }

    render() {
        return (
        <div className="col-md-12 subtitle">
            <h6>Please select the addons</h6>
            <div className="items">
              {this.state.addonsList.map((value,i) => (
                <div className="col-md-6"  key={i}>
                  <button className="button button1">
                  <div className="icon">
                  <img className="buttonIcon" src={iconsBaseUrl+value.icon}/>
                  </div>{value.name}</button>
                  <img className="tooltipIcon" src={iconsBaseUrl+'tooltip.png'}/>
                </div>
              ))}
            </div>
        </div>
        );
    }
}