import React from 'react';
import '../index.css';
import {iconsBaseUrl} from "../config";
import * as commonService from '../commonService';

export class ApplicationComponent extends React.Component {
    //const _commonService = new CommonService();
    constructor(props){
        super(props);
        this.state ={
          applicationList:[],
          versionList:[],
          productDetails: {
            version: "",
            applications: []
          }
        }
    }

    componentDidMount(){
      this.setState({versionList:JSON.parse(sessionStorage.getItem('metadata'))[0].versions});
      this.setState({applicationList:JSON.parse(sessionStorage.getItem('metadata'))[0].applications},function(){
        console.log(this.state.applicationList);
      });
      
      this.prodDetails = commonService.getProductdetails();
      this.prodDetails.applications.forEach(app=>{
        this.state.productDetails.applications.push(app);
      });
      this.setState({productDetails: this.state.productDetails});
    }

    saveItem=(item)=>{
      const index = this.state.productDetails.applications.indexOf(item);
      if(index===-1){
        this.state.productDetails.applications.push(item);
      } else {
        this.state.productDetails.applications.splice(index,1);
      }
      this.setState({productDetails: this.state.productDetails});
      console.log(this.state.productDetails.applications);
    }

    componentWillUnmount() {
      commonService.saveProductdetails(this.state.productDetails.applications,'applications');
    }
    render() {
        return (
      <div>   
        <div className="col-md-12 subtitle" >
            <h6>Please select the GW Version</h6>
            <div className="items col-md-12" style={{marginTop:"0.5rem", height: "15px"}}>
              {this.state.versionList.map((value,i) => (
                <div className="col-md-3" key={i}>
                  <div>{value.name} <input type="checkbox" value={this.state.productDetails.version}></input></div>
                  <img className="tooltipCheckBox" src={iconsBaseUrl+'tooltip.png'}/>
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
                  <button className="button button1" className={this.state.productDetails.applications.indexOf(value.code)>-1? 'is-active' : 'deactive'} onClick={()=>{this.saveItem(value.code)}}>
                  <div className="icon">
                  <img className="buttonIcon" src={iconsBaseUrl+value.icon}/>
                  </div>{value.name}</button>
                  <img className="tooltipIcon" src={iconsBaseUrl+'tooltip.png'}/>
                </div>
              ))}
            </div>
        </div>
      </div>
        );
        
    }
}