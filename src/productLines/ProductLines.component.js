import React from 'react';
import '../index.css';
import {iconsBaseUrl} from "../config";
import * as commonService from '../commonService';

export class ProductLinesComponent extends React.Component {
    prodDetails = {};
    constructor(props){
        super(props);
        this.state = {
          productList:[]
        }
    }

    componentDidMount(){
      this.setState({productList:JSON.parse(sessionStorage.getItem('metadata'))[0].productLines},function(){
        this.prodDetails = commonService.getProductdetails();
        console.log(this.state.productList);
        let values = this.state.productList.filter(list=>{
          let isAvailable = false;
          list.applications.forEach(app=>{
            if(this.prodDetails.applications.indexOf(app)>-1){
              isAvailable = true;
            }
          });
          return isAvailable;
        });
        console.log(values);
        this.setState({productList:values});
        console.log(this.state.productList);
      });
      
    }

    render() {
        return (
        <div className="col-md-12 subtitle">
            <h6>Please select the product from below list?</h6>
            <div className="items">
              {this.state.productList.map((value,i) => (
                <div className="col-md-6" key={i}>
                  <button className="button button1">
                  <div className="icon">
                  <img className="buttonIcon"src={iconsBaseUrl+value.icon} />
                  </div>{value.name}</button>
                  <img className="tooltipIcon" src={iconsBaseUrl+'tooltip.png'}/>
                </div>
              ))}
            </div>
        </div>
        );
    }
}