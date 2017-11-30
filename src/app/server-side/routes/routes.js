var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var Link = ReactRouter.Link;
var IndexRoute = ReactRouter.IndexRoute;
var browserHistory = ReactRouter.browserHistory;
var LayoutComponent = require('../../components/Layout.js');
var HomeComponent = require('../../components/Home.js');
var AllTimeComponent = require('../../components/AllTime.js');
var AboutComponent = require('../../components/About.js');
var SignInComponent = require('../../components/SignIn.js');
var RegisterComponent = require('../../components/Register.js');
var ProfileComponent = require('../../components/Profile.js');
var SettingsComponent = require('../../components/Settings.js');
var UploadVideoComponent = require('../../components/UploadVideo.js');

/*
<Route path='profile' component={ProfileComponent} />
*/

if (typeof window === 'object') {
    function createElement(Component, props) {
        return <Component {...props} custom={window.PROPS} />;
    }
}

/*

var requireAuth = function() {
    if (!isLoggedIn) {
        console.log('You must log in to proceed');
    } else {
        console.log('Youre logged in youre good to go');
    }
};

*/

module.exports = (
    <Router history={browserHistory} createElement={createElement}>
        <Route path='/' component={LayoutComponent}>
            <IndexRoute component={HomeComponent} />
            <Route path='alltime' component={AllTimeComponent} />
            <Route path='about' component={AboutComponent} />
            <Route path='signin' component={SignInComponent} />
            <Route path='register' component={RegisterComponent} />
            <Route path='profile' component={ProfileComponent} />
            <Route path='settings' component={SettingsComponent} />
            <Route path='uploadvideo' component={UploadVideoComponent} />
        </Route>
    </Router>
);
