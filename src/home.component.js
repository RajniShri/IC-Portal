import React from 'react';
import './index.css';
import * as commonService from './commonService';

export class HomeComponent extends React.Component {
    constructor(props){
        super(props);
    }

    next = (history) => {
      history.push("/application");
    };

    render() {
      const { match, location, history } = this.props;
        return (
         <div className=""> 
        <div className="col-md-12 subtitle">
            <h4>Welcome to Insur Cloud</h4>
            <a href="" onClick={()=>{this.next(history)}}>Create My product</a>
            </div>
            </div>
        );
    }
}