import React from "react";
import styles from './HeaderStyle.css';
import css from './HeaderStyle.css';

export class Header extends React.Component {

  render(){

     return(
        <nav className="navbar navbar-inverse navbar-fixed-top app-navbar">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">OneUp</a>
                    <ul className="nav navbar-nav navbar-right">
                       <li><a href="#">Home</a></li>
                       <li><a href="#">About</a></li>
                       <li><a href="#">Sign In / Create Account</a></li>
                    </ul> 
            </div>
            <div className="navbar-collapse collapse" id="navbar-collapse-main">
                <ul className="nav navbar-nav navbar-right m-r-0 hidden-xs">
                </ul>
            </div>
        </nav> 
    ); 

  } 
} 





