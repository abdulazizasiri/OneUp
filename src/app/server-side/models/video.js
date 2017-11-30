var mongoose = require('mongoose');

mongoose.connect('mongodb://test:test@ds113660.mlab.com:13660/oneup');

var VideoSchema = mongoose.Schema({
    title: {
        type: String
    },
    description: {
        type: String
    },
    username: {
        type: String
    },
    userId: {
        type: String
    }
});

var Video = module.exports = mongoose.model('Video', VideoSchema);

module.exports.saveVideo = function(newVideo, user) {
    var title = newVideo.title;
    var description = newVideo.description;
    var username = user.username;
    var userId = user.id;
    var vid = Video({title: title, description: description, username: username, userId: userId}).save(function(err) {
        if (err) {
            throw err;
        }
        console.log("video saved");
    });
};
