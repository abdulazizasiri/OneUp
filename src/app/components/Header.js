var React = require('react');
var Link = require('react-router').Link;

/*
import styles from '../CSS/HeaderStyle.css';
import css from '../CSS/HeaderStyle.css';
import { Link } from 'react-router-dom';

<li><Link to='/'>Home</Link></li>
<li><Link to='/about'>About</Link></li>
<li><Link to='/profile'>Profile</Link></li>
<li><Link to='/signin'>Sign In / Create Account</Link></li>
<li><Link to='/signin'>Sign Out</Link></li>

{
    this.props.tabs.map(function(tab) {
        var route;
        if (tab === 'Home') {
            route = '/';
        } else if (tab === 'About') {
            route = '/about';
        } else if (tab === 'Sign In/Create Account') {
            route = '/signin';
        } else if (tab === 'Profile') {
            route = '/profile';
        } else if (tab === 'Sign Out') {
            route = '/signin';
        }
        return <li key={tab}><Link to={route}>{tab}</Link></li>;
    })
}

<li><Link to='/profile'>Profile</Link></li>



<li><Link to='/'>Home</Link></li>
<li><Link to='/about'>About</Link></li>
<li><Link to='/signin'>Sign In / Create Account</Link></li>

*/

const Header = (props) => {

    return (
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
                            {
                                props.tabs.map(function(tab) {
                                    var route;
                                    if (tab === 'Home') {
                                        route = '/';
                                    } else if (tab === 'About') {
                                        route = '/about';
                                    } else if (tab === 'Sign In/Create Account') {
                                        route = '/signin';
                                    } else if (tab === 'Profile') {
                                        route = '/profile';
                                    }

                                    return <li key={tab}><Link to={route}>{tab}</Link></li>;
                                })
                            }
                        </ul>
                    </div>

                </div>
            </nav>
        </header>
    );
};


module.exports = Header;

