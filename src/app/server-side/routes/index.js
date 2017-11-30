var router = require('express').Router();
var React = require('react');
var ReactDOMServer = require('react-dom/server');
var ReactRouter = require('react-router');
var bodyParser = require('body-parser');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var expressValidator = require('express-validator');
var User = require('../models/user.js');
var Video = require('../models/video.js');

router.use(bodyParser.urlencoded({ extended: true }));
router.use(expressValidator());
router.use(passport.initialize());

var props = {
    loggedIn: '',
    name: '',
    username: '',
    bio: '',
    socialMediaOne: '',
    socialMediaTwo: '',
    socialMediaThree: '',
    tabs: ['Home', 'About', 'Sign In/Create Account']
};

var currentUser;

router.get('*', function(request, response) {
    ReactRouter.match({
        routes: require('./routes.js'),
        location: request.url
    }, function(error, redirectLocation, renderProps) {
        if (renderProps) {
          /*

            console.log('');
            console.log(renderProps.location.pathname);
            console.log(props.loggedIn);
            console.log('');

            */
            // console.log(renderProps.location.pathname);
            if (renderProps.location.pathname === '/profile' && props.loggedIn === false) {
                return response.redirect('/signin');
            }

            var html = ReactDOMServer.renderToString(
                <ReactRouter.RouterContext {...renderProps}
                    createElement={function(Component, renderProps) {
                        return <Component {...renderProps} custom={props} />;
                    }}
                />
            );
            response.send(html);
        } else {
            response.status(404).send('Not Found');
        }
    });
});

passport.use(new LocalStrategy(
    function(username, password, done) {
        User.getUserByUsername(username, function(err, user) {
            if (err) {
                throw err;
            }
            if (!user) {
                console.log("The username doesn't exist");
                return done(null, false, {message: 'Unknown User'});
            }

            props.name = user.name;
            props.username = user.username;
            props.bio = user.bio;
            props.socialMediaOne = user.socialMediaOne;
            props.socialMediaTwo = user.socialMediaTwo;
            props.socialMediaThree = user.socialMediaThree;

            // props = user;
            currentUser = user;

            User.comparePassword(password, user.password, function(err, isMatch) {
                if (err) {
                    throw err;
                }
                if (isMatch) {
                    props.loggedIn = true;
                    props.tabs = ['Home', 'About', 'Profile'];
                    return done(null, user);
                } else {
                    console.log("The password does not match");
                    return done(null, false, {message: 'Invalid password'});
                }
            });
        });
    }
));

passport.serializeUser(function(user, done) {
    done(null, user.id);
});

passport.deserializeUser(function(id, done) {
    User.getUserById(id, function(err, user) {
        done(err, user);
    });
});

router.post('/signin',
    passport.authenticate('local', {successRedirect: '/profile', failureRedirect: '/signin', failureFlash: false}),
    function(req, res) {
        res.redirect('/');
    });

router.post('/register', function(request, response) {
    var name = request.body.name;
    var email = request.body.email;
    var username = request.body.username;
    var password = request.body.password;
    var confirmedPassword = request.body.confirmedPassword;

    // Validation
    request.checkBody('name', 'Name is required').notEmpty();
    request.checkBody('email', 'Email is required').notEmpty();
    request.checkBody('email', 'Email is not valid').isEmail();
    request.checkBody('username', 'Username is required').notEmpty();
    request.checkBody('password', 'Password is required').notEmpty();
    request.checkBody('confirmedPassword', 'Passwords do not match').equals(request.body.password);

    var errors = request.validationErrors();

    if (errors) {
        for (var i = 0; i < errors.length; i++) {
            console.log(errors[i].msg);
        }
        return response.redirect('/register');
    } else {
        var newUser = new User({
            name: name,
            email: email,
            username: username,
            password: password
        });

        User.createUser(newUser, function(err, user) {
            if (err) {
                throw err;
            }
            // console.log(user);
            return response.redirect('/signin');
        });
    }
});

router.post('/settings', function(request, response) {
    User.updateUser(currentUser.username, request.body);
    return response.redirect('/signin');
});

router.post('/uploadvideo', function(request, response) {
    Video.saveVideo(request.body, currentUser);
    return response.redirect('/profile');
});

module.exports = router;
