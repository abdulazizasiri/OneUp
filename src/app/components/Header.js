import React from "react";

import styles from './HeaderStyle.css';
//import css from './HeaderStyle.css';

export class Header extends React.Component {
  render(){
    return(
        <nav className="navbar navbar-inverse">
          <div className="container-fluid">
            <div className="navbar-header">
              <a className="navbar-brand" href="#">OneUp</a>
            </div>
            <ul className="nav navbar-nav">
              <li><a href="#">Home</a></li>
              <li className="active"><a href="#">About</a></li>
              <li><a href="#">Sign in / Create Account</a></li>
            </ul>
          </div>
        </nav> 

    );
  }
}



