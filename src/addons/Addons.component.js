import React from 'react';
import '../index.css';
import {iconsBaseUrl} from "../config";
import * as commonService from '../commonService';

export class AddonsComponent extends React.Component {

    constructor(props){
        super(props);
        this.state ={
          addonsList:[],
          productDetails: {
            addons: []
          }
        }
    }

    componentDidMount(){
      this.setState({addonsList:JSON.parse(sessionStorage.getItem('metadata'))[0].addons},function(){
        this.prodDetails = commonService.getProductdetails();
        let values = this.state.addonsList.filter(list=>{
          let isAvailable = false;
          list.applications.forEach(app=>{
            if(this.prodDetails.applications.indexOf(app)>-1){
              isAvailable = true;
            }
          });
          return isAvailable;
        });
        this.setState({addonsList:values});
      });
      this.prodDetails = commonService.getProductdetails();
      this.prodDetails.addons.forEach(app=>{
        this.state.productDetails.addons.push(app);
      });
      this.setState({productDetails: this.state.productDetails});
    }

    componentWillUnmount() {
      commonService.setProductdetails(this.state.productDetails.addons,'addons');
    }

    saveItem=(item)=>{
      const index = this.state.productDetails.addons.indexOf(item);
      if(index===-1){
        this.state.productDetails.addons.push(item);
      } else {
        this.state.productDetails.addons.splice(index,1);
      }
      this.setState({productDetails: this.state.productDetails});
    }

    render() {
        return (
        <div className="col-md-12 subtitle">
            <h6>Please select the addons</h6>
            <div className="items">
              {this.state.addonsList.map((value,i) => (
                <div className="col-md-6"  key={i}>
                  <button className="button button1" className={this.state.productDetails.addons.indexOf(value.code)>-1? 'is-active' : 'deactive'} onClick={()=>{this.saveItem(value.code)}}>
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