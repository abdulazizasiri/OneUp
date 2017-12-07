// import React from 'react';
// import css from '../CSS/UploadVideoStyle.css';
// import styles from '../CSS/UploadVideoStyle.css';;
// <input type="text" style={{marginLeft: "105px", marginTop: "0px"}}
//   className="attachVideoButton" value="Attach Video" />
//  <textarea className="videoLink" cols="40" rows="1"
//    style={{marginLeft: "70px", backgroundColor: "white", borderRadius: "5px"}}
//    name="videolink"></textarea>

var React = require('react');
var Link = require('react-router').Link;

const UploadVideo = (props) => {

    return (
        <div className="container" style={{marginTop: "200px"}}>
            <div id="uploadVideoPanel"
                className="mainbox col-md-6 col-md-offset-3 col-sm-6 col-sm-offset-2 col-xs-6 col-xs-offset-1">
                <div className="panel panel-info">
                    <div className="panel-heading">
                        <font color="white" size="5" style={{marginLeft: "25px"}}>UPLOAD CLIP</font>
                        <button className="closeButton"><Link to="/profile">
                            <span className="glyphicon glyphicon-remove"
                                style={{color: "red"}}></span>
                        </Link></button><br/>
                    </div>
                    <div className="panel-body">
                        <form id="signupform" encType="multipart/form-data" method="POST" action="/uploadvideo">
                            <div className="videos">
                                <font style={{marginTop: "50px"}} className="videosLabel" color="white">Video</font>
                                <input type="file" style={{marginLeft: "105px", marginTop: "0px"}}
                                    className="attachVideoButton" name="videofile" accept='.mov' value="Attach Video" />
                            </div>
                            <div className="title" style={{marginTop: "35px"}}>
                                <font className="titleLabel" color="white">Title</font>
                                <textarea className="videoTitle" cols="40" rows="1"
                                    style={{marginLeft: "80px", backgroundColor: "white", borderRadius: "5px"}}
                                    name="title"></textarea>
                            </div>
                            <div className="descriptionTitle" style={{marginTop: "35px"}}>
                                <font className="descriptionLabel" color="white">Description</font>
                                <textarea className="videoDescription" cols="40" rows="5"
                                    style={{marginLeft: "35px", backgroundColor: "white", borderRadius: "5px"}}
                                    name="description"></textarea>
                            </div>
                            <div className="uploadVideoButton" style={{marginTop: "25px", marginLeft: "150px"}}>
                                <input type="submit" style={{width: "150px",
                                    backgroundColor: "#990000", color: "white", borderRadius: "5px", border: "0"}}
                                className="uploadButton" value="UPLOAD" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

module.exports = UploadVideo;


