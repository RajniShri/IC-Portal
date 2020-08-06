import React from 'react';
import './index.css';

export class LoginComponent extends React.Component {

    constructor() {
        super();
        this.state = {
          username: '',
          password: '',
        };
    }

    next = (history) => {
      history.push("/");
    };

    render() {
      const { history } = this.props;
        return (
          <div className="col-md-12 col-sm-6 col-xs-8">
          <div className="Login">
            <form>
            <label for="uname"><b>Username</b></label>
            <input type="text" placeholder="Enter Username" name="uname" required></input>       
    
            <label for="psw"><b>Password</b></label>
            <input type="password" placeholder="Enter Password" name="psw" required></input>  
    
            <button class="btn btn-primary" style={{backgroundColor: "#86BC25",borderColor:"#86BC25"}} type="submit" onClick={()=>{this.next(history)}}>Login</button>

            </form>
          </div>
          </div>
        );
      }
    }