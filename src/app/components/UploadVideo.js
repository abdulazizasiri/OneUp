import React from 'react';
import css from '../CSS/UploadVideoStyle.css';
import styles from '../CSS/UploadVideoStyle.css';;

const UploadVideo = (props) => {

  const closeWindow = () => {
    props.history.push('/profile');
  };

  return(
    <div className="container" style={{marginTop: "100px"}}>
       <div id="uploadVideoPanel" className="mainbox col-md-6 col-md-offset-3 col-sm-6 col-sm-offset-2 col-xs-6 col-xs-offset-1">
          <div className="panel panel-info">
               <div className="panel-heading">
                  <font color="white" size="5" style={{marginLeft: "25px"}}>UPLOAD CLIP</font>
                  <button className="closeButton" onClick={closeWindow}><span className="glyphicon glyphicon-remove"
                      style={{color: "red"}}></span></button><br/>
               </div>
               <div className="panel-body">
                   <div className="videos">
                      <font className="videosLabel" color="white">Video</font>
                      <button type="button" style={{marginLeft: "70px", width: "150px",
                          backgroundColor: "#990000", color: "white", borderRadius: "5px", border: "0"}}
                        className="attachVideoButton">Attach Video</button>
                   </div>
                   <div className="title" style={{marginTop: "35px"}}>
                      <font className="titleLabel" color="white">Title</font>
                      <textarea className="videoTitle" cols="40" rows="1"
                        style={{marginLeft: "80px", backgroundColor: "gray", borderRadius: "5px"}}></textarea>
                   </div>
                   <div className="descriptionTitle" style={{marginTop: "35px"}}>
                      <font className="descriptionLabel" color="white">Description</font>
                      <textarea className="videoDescription" cols="40" rows="5"
                         style={{marginLeft: "35px", backgroundColor: "gray", borderRadius: "5px"}}></textarea>
                   </div>
                   <div className="uploadVideoButton" style={{marginTop: "25px", marginLeft: "150px"}}>
                      <button type="button" style={{width: "150px",
                          backgroundColor: "#990000", color: "white", borderRadius: "5px", border: "0"}}
                          className="uploadButton">UPLOAD</button>
                   </div>
               </div>
          </div>
       </div>
    </div>
  );
};

export default UploadVideo