import React from 'react';
import '../index.css';
import {iconsBaseUrl} from "../config";
import * as commonService from '../commonService';
import * as httpService from '../httpService';

export class ConfirmationComponent extends React.Component {
    productDetails = {};
    constructor(props){
        super(props);
        this.state = {
          productList:[],
          productDetails: {
            version:"",
            applications:[],
            productLines:[],
            addons:[]
          },
          submitted: false
        }
    }

    saveDetails(){
      var params = commonService.getProductdetails();
      params.productid = (params.applications+params.productLines+Math.floor((Math.random()*10000000))).split(",").join("");
      commonService.setProductdetails(params.productid,'productid');
      httpService.save(params);
      this.setState({submitted:true}); 
    }

    componentDidMount(){
      let packageDetails = commonService.getProductdetails();
      let metadata = commonService.getMetadata()[0];
      this.productDetails.applications = this.getLabel(metadata.applications,packageDetails.applications);
      this.productDetails.productLines = this.getLabel(metadata.productLines,packageDetails.productLines);
      this.productDetails.addons = this.getLabel(metadata.addons,packageDetails.addons);
      this.setState({productDetails:this.productDetails});
    }

    getLabel(metaApp,packApp) {
      let values = [];
      metaApp.forEach(app => {
        if(packApp.indexOf(app.code)>-1) {
          values.push(app);
        }
      });
      return values; 
    }

    render() {
        return (
         <div className=""> {!this.state.submitted && 
          <div>
        <div className="col-md-12 subtitle">
            <h4>Confirm your product details below:</h4>
            </div>
            <div className="items col-md-12">
              <h6>Applications:</h6>
              {this.state.productDetails.applications.map((value,i) => (
                <div className="col-md-6" key={i}>
                  {value.name}
                </div>
              ))}
            </div>
            <div className="items col-md-12">
              <h6>Product Lines:</h6>
              {this.state.productDetails.productLines.map((value,i) => (
                <div className="col-md-6" key={i}>
                  {value.name}
                </div>
              ))}
            </div>
            <div className="items col-md-12">
              <h6>Addons:</h6>
              {this.state.productDetails.addons.map((value,i) => (
                <div className="col-md-6" key={i}>
                  {value.name}
                </div>
              ))}
            </div>
            <button onClick={()=>{this.saveDetails()}}>Submit</button></div>}
            {this.state.submitted && 
          <div>
            <h6>Thank you !!!</h6>
            <span> Here is reference id:</span><h6> {this.state.productDetails.productid}</h6>
            <a href="http://localhost:3000">Start new product?</a>
            </div>}
            </div>
        );
    }
}