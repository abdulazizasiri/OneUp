import React from "react";
import css from "../CSS/ProfileStyle.css";
import styles from "../CSS/ProfileStyle.css";
import UploadVideo from './UploadVideo';


const Profile = (props) => {

  const handleClick = () => {
    props.history.push('/uploadvideo');
  }

  return(

  <div className="profile container-fluid">
    <div className="row">

       <div className="col-xs-12 col-md-10 col-md-offset-1" style={{background:'grey', marginTop:'50px'}}>
          <div className="row">
            <div className="col-xs-12 col-md-2" style={{height:'170px', background:'pink'}}>
              <div className="profileImage">
                <img className="img-circle" src="https://www.dragonsearch.com/wp-content/themes/dragonsearch/library/images/placeholders/thumbnail_placeholder.png"/>
              </div>
            </div>

            <div className="col-xs-12 col-md-10" style={{background:'green', marginTop:'50px'}}>

              <div className="row">
                <div className="col-xs-6 col-md-6" style={{background:'brown'}}>
                   <div className="row">
                      <div className="col-xs-8 col-md-8 text-center" style={{background:"yellow"}}>
                         <font className="name" color="white" size="5">Justin Lee</font>
                      </div>
                   </div>
                   <div className="row">
                      <div className="col-xs-8 col-md-8 text-center" style={{background:"orange"}}>
                         <font className="username" color="white" size="3">jlee201</font>
                      </div>
                   </div>
                   <div className="row">
                      <div className="col-xs-8 col-md-8 text-center" style={{background:'purple'}}>
                        <div className="settings">
                           <button type="button" className="settingsButton">Settings</button>
                        </div>
                      </div>
                   </div>
                </div>

                <div className="col-xs-6 col-md-6" style={{background:'blue'}}>
                  <div className="row">
                    <div className="col-xs-6 col-md-6 col-md-offset-4 text-center" style={{background:'orange'}}>
                      <div style={{marginRight: "20px"}} className="uploadClips">
                         <button onClick={handleClick} className="uploadClipsButton"><span className="glyphicon glyphicon-plus-sign"
                             style={{color: "red"}}></span></button><br/>
                         <font color="white" size="3" className="uploadClipsLabel">Upload Clip</font>
                      </div>
                    </div>
                  </div>
                </div>
               </div>
            </div>


          </div>
       </div>
    </div>

    <div className="row">
       <div className="col-xs-12 col-md-10 col-md-offset-1" style={{height: '20px',background:'black'}}>
       </div>
    </div>


    <div className="row" id="bio">
       <div className="col-xs-12 col-md-10 col-md-offset-1" style={{height: '40px',background:'red'}}>
          <font color="white" size="4">BIO</font>
       </div>
    </div>


    <div className="row" id="socialMedia">
       <div className="col-xs-12 col-md-10 col-md-offset-1"
          style={{height: '40px', background:'yellow',marginTop: "25px", marginBottom: "25px"}}>
       <font color="white" size="4">FOLLOW ME</font>
        </div>
    </div>


    <div className="lineBorder"></div>
    <div className="row" id="uploadsSection">
       <div className="col-xs-12 col-md-10 col-md-offset-1"
          style={{background:'pink',marginTop: "25px"}}>
          <font color="white" size="4" className="uploads">UPLOADS</font>
          <font style={{marginLeft: "15px"}} size="2" className="uploadsCount">UPVOTE COUNT: 55</font>
       </div>
    </div>


    <div className="row" id="videoClipsSection">
       <div className="col-xs-12 col-md-10 col-md-offset-1" style={{ height: '50px', background:'purple'}}>
          <p>Video Clips Here</p>
       </div>
    </div>


    <div className="lineBorder" style={{marginTop: "25px"}}></div>
    <div className="row">
       <div className="col-xs-12 col-md-10 col-md-offset-1" style={{background:'orange', marginTop: "25px"}}>
          <font color="white" size="4" className="upvotedVideos">UPVOTED VIDEOS</font>
       </div>
    </div>


    <div className="row">
       <div className="col-xs-12 col-md-10 col-md-offset-1" style={{background:'green', height: '50px'}}>
          <p>Upvoted Clips Here</p>
       </div>
    </div>


  </div>
);
};

export default Profile
