import React from "react";
import styles from './HeaderStyle.css';
import css from './HeaderStyle.css';

export class Header extends React.Component {

  render(){

     return(
        /*<nav classNameName="navbar navbar-inverse navbar-fixed-top app-navbar">

            <div classNameName="container-fluid">
                <a classNameName="navbar-brand" href="#">OneUp</a>
                    <ul classNameName="nav navbar-nav navbar-right">
                       <li><a href="#">Home</a></li>
                       <li><a href="#">About</a></li>
                       <li><a href="#">Sign In / Create Account</a></li>
                    </ul> 
            </div>

        </nav> */

        <nav className="navbar navbar-inverse navbar-fixed-top app-navbar" role="navigation">
            <div className="container">

                <div className="navbar-header">
                    
                    <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#navbar">
                        <span className="sr-only">Toggle navigation</span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </button>

                    <a className="navbar-brand" href="#">OneUp</a> 

               </div>


               <div className="collapse navbar-collapse pull-right" id="navbar" >
                    <ul className="nav navbar-nav navbar-right">
                        <li>
                            <a href="#">Home</a>
                        </li>
                        <li>
                            <a href="#">About</a>
                        </li>
                        <li>
                            <a href="#">Sign In / Create Account</a>
                        </li>
                    </ul>
                </div>

            </div>

        </nav>   






    ); 

  } 
} 





