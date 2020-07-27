import React from 'react';
import '../index.css';
import {iconsBaseUrl} from "../config";
import * as commonService from '../commonService';

export class ConfirmationComponent extends React.Component {
    productDetails = {};
    constructor(props){
        super(props);
        this.state = {
          productList:[],
          productDetails: {
            versions:[],
            applications:[],
            productlines:[],
            addons:[]
          }
        }
    }

    saveDetails(){
      commonService.save(this.state.productDetails);
    }

    componentDidMount(){
      this.productDetails = commonService.getProductdetails();
      console.log(this.productDetails);

      this.setState({productDetails:this.productDetails});
    }

    render() {
        return (
          <div className="">
        <div className="col-md-12 subtitle">
            <h4>Confirm your product details below:</h4>
            </div>
            <div className="items col-md-12">
              <h6>Applications:</h6>
              {this.state.productDetails.applications.map((value,i) => (
                <div className="col-md-6" key={i}>
                  {value}
                </div>
              ))}
            </div>
            <div className="items col-md-12">
              <h6>Product Lines:</h6>
              {this.state.productDetails.productlines.map((value,i) => (
                <div className="col-md-6" key={i}>
                  {value}
                </div>
              ))}
            </div>
            <div className="items col-md-12">
              <h6>Addons:</h6>
              {this.state.productDetails.addons.map((value,i) => (
                <div className="col-md-6" key={i}>
                  {value}
                </div>
              ))}
            </div>
            <button onClick={()=>{this.saveDetails()}}>Submit</button>
            </div>
        );
    }
}