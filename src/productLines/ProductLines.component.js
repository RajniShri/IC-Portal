import React from 'react';
import '../index.css';
import {iconsBaseUrl} from "../config";

export class ProductLinesComponent extends React.Component {
  
    constructor(props){
        super(props);
        this.state ={
          productList:[]
        }
    }

    componentDidMount(){
      this.setState({productList:JSON.parse(sessionStorage.getItem('metadata'))[0].productLines});
    }

    render() {
        return (
        <div className="col-md-12 subtitle">
            <h6>Please select the product from below list?</h6>
            <div className="items">
              {this.state.productList.map((value,i) => (
                <div className="col-md-6" key={i}>
                  <button class="button button1">
                  <div className="icon">
                  <img src={iconsBaseUrl+value.icon} style={{width: "25px",height: "25px"}}/>
                  </div>{value.name}</button>
                  <img src={iconsBaseUrl+'tooltip.png'} style={{width: "15px",height: "15px",marginLeft: "5px",marginTop: "25px"}}/>
                </div>
              ))}
            </div>
        </div>
        );
    }
}