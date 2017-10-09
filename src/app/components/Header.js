import React from "react";

import styles from './HeaderStyle.css';
import css from './HeaderStyle.css';

export class Header extends React.Component {
 render(){
     return(
          <ul className="nav navbar-nav navbar-right">
             <li className="active"><a href="#">Home</a></li>
             <li><a href="#">About</a></li>
             <li><a href="#">Sign In / Create Account</a></li>
          </ul> 
       
    );
 }
}



