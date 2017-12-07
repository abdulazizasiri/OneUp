var mongoose = require('mongoose');
var User = require('../models/user.js');

mongoose.connect('mongodb://test:test@ds113660.mlab.com:13660/oneup');

var VideoSchema = mongoose.Schema({
    videoPath: {
        type: String
    },
    totalUpvotes: {
        type: Number
    },
    title: {
        type: String
    },
    description: {
        type: String
    },
    username: {
        type: String
    }
});

var Video = module.exports = mongoose.model('Video', VideoSchema);

module.exports.saveVideo = function(newVideo, user) {
    var videofile = newVideo.videofile;
    var title = newVideo.title;
    var description = newVideo.description;
    var username = user.username;
    var userId = user.id;
    var vid = Video(
        {
            videoFile: videofile,
            totalUpvotes: 0,
            title: title,
            description: description,
            username: username,
            userId: userId
        }).save(function(err) {
        if (err) {
            throw err;
        }
        var updatedUploads;
        User.getUserByUsername(username, function(err, user) {
            if (err) {
                throw err;
            }
            updatedUploads = user.uploads;
            updatedUploads.push(videofile);
            User.findOneAndUpdate(
                {username: username},
                {$set: {uploads: updatedUploads}},
                function(err, doc) {
                    if (err) {
                        throw err;
                    }
                });
        });
        console.log("video saved");
    });
};
