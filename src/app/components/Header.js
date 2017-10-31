import React from "react";
import styles from "../CSS/HeaderStyle.css";
import css from "../CSS/HeaderStyle.css";
import { Link } from "react-router-dom";


//export const Header = (props) => {
const Header = () => (
  <header>
    <nav className="navbar navbar-inverse navbar-fixed-top app-navbar" role="navigation">
        <div className="container">

            <div className="navbar-header">
                <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#navbar">
                    <span className="sr-only">Toggle navigation</span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                </button>
                <a className="navbar-brand" href="/">OneUp</a>
            </div>


            <div className="collapse navbar-collapse pull-right" id="navbar" >
                <ul className="nav navbar-nav navbar-right">
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/about'>About</Link></li>
                    <li><Link to='/profile'>Profile</Link></li>
                    <li><Link to='signin'>Sign In / Create Account</Link></li>
                </ul>
            </div>

        </div>
    </nav>
  </header>
)

export default Header
