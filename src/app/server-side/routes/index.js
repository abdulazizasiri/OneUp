var router = require('express').Router();
var React = require('react');
var ReactDOMServer = require('react-dom/server');
var ReactRouter = require('react-router');
var bodyParser = require('body-parser');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var expressValidator = require('express-validator');
var upload = require('express-fileupload');
var path = require('path');
var User = require('../models/user.js');
var Video = require('../models/video.js');

router.use(upload());
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));
router.use(expressValidator());
router.use(passport.initialize());

var props = {
    loggedIn: 'false',
    profilePicPath: '',
    name: '',
    username: '',
    bio: '',
    socialMediaOne: '',
    socialMediaTwo: '',
    socialMediaThree: '',
    tabs: ['Home', 'About', 'Sign In/Create Account'],
    videos: []
};


/*
Video.find({}, function(err, video) {
    props.videos = video;
}); */

Video.find().sort({totalUpvotes: -1}).exec(function (err, video) {
    props.videos = video;
})

var currentUser;

router.get('*', function(request, response) {
    ReactRouter.match({
        routes: require('./routes.js'),
        location: request.url
    }, function(error, redirectLocation, renderProps) {
        Video.find().sort({totalUpvotes: -1}).exec(function (err, video) {
            props.videos = video;
            if (renderProps) {
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
        })
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

            props.profilePicPath = user.profilePicPath || 'https://www.dragonsearch.com/wp-content/themes/dragonsearch/library/images/placeholders/thumbnail_placeholder.png';
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

router.post('/', function(request, response) {
    Video.findOneAndUpdate(
      {_id: request.body.videoID},
      {$set: {totalUpvotes: request.body.newTotalUpvotes}},
      function(err, doc) {
          if (err) {
              throw err;
          }
      }
    );
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
    if (request.files) {
        var file = request.files.profilepic,
            filename = file.name;
        file.mv(path.join(__dirname, "../../public/profilepics/" + filename), function(err) {
            if (err) {
                console.log(err);
                response.send("error occurred");
            } else {
                var profilePicPath = 'public/profilepics/' + filename;
                User.updateUser(currentUser.username, request.body, profilePicPath);
                return response.redirect('/signin');
            }
        })
    }
    // return response.redirect('/signin');
});

router.post('/uploadvideo', function(request, response) {
    if (request.files) {
        var file = request.files.videofile,
            filename = file.name;
        file.mv(path.join(__dirname, "../../public/skateclips/" + filename), function(err) {
            if (err) {
                console.log(err);
                response.send("error occurred");
            } else {
                var vid = Video(
                    {
                        videoPath: 'public/skateclips/' + filename,
                        title: request.body.title,
                        description: request.body.description,
                        username: currentUser.username,
                        totalUpvotes: 0
                    }
                ).save(function(err) {
                    if (err) {
                        throw err;
                    }
                    console.log("video saved");
                    return response.redirect('/profile');
                });
            }
        });
    }
});

module.exports = router;
