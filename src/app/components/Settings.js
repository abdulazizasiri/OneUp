var React = require('react');
var Link = require('react-router').Link;

const Settings = () => {

    return (
        <div className="container-fluid">
            <div className="row">
                <div id="settingsBox" style={{marginTop: "200px", display: "true"}}
                    className="col-xs-12 col-sm-12 col-md-8 col-md-offset-2">
                    <div className="panel panel-info">
                        <div className="panel-heading">
                            <div className="row">
                                <font color="white" size="5" style={{marginLeft: "25px"}}>SETTINGS</font>
                                <button className="closeButton" onClick={this.closeWindow}><Link to="/profile">
                                    <span className="glyphicon glyphicon-remove"
                                        style={{color: "red"}}></span>
                                </Link></button><br/>
                            </div>
                            <div className="panel-body">
                                <form id="signupform" className="form-horizontal"
                                    encType="multipart/form-data" method="POST" action="/settings">
                                    <div className="row">
                                        <font className="col-xs-3 col-sm-3 col-md-3"
                                            color="white">Change Profile Picture</font>
                                          <input type="file" className="col-xs-2 col-sm-2 col-md-2" name="profilepic" accept="image/*" />
                                        <font className="col-xs-3 col-sm-3 col-sm-offset-1" color="white">
                                     Update Social Media
                                        </font>
                                        <input className="col-xs-3 col-sm-2"
                                            id="form" name="socialMediaOne" type="text"></input>
                                    </div>
                                    <div className="row" style={{marginTop: "30px"}}>
                                        <font className="col-xs-3 col-sm-3 col-md-3" color="white">Change Password</font>
                                        <input className="col-xs-2 col-sm-2"
                                            id="form" name="changedPassword" type="text"></input>
                                        <input className="col-xs-3 col-xs-offset-3 col-sm-2 col-sm-offset-4"
                                            id="form" name="socialMediaTwo" type="text"></input>
                                    </div>
                                    <div className="row" style={{marginTop: "30px"}}>
                                        <input className="col-xs-3 col-xs-offset-8 col-sm-2 col-sm-offset-9"
                                            id="form" name="socialMediaThree" type="text"></input>
                                    </div>
                                    <div className="row" style={{marginTop: "30px"}}>
                                        <font className="col-xs-3 col-sm-3 col-md-3" color="white">Update Bio</font>
                                        <textarea className="col-xs-7 col-sm-7"
                                            id="editBioForm" name="changedBio" cols="55" rows="5"></textarea>
                                    </div>
                                    <div className="row" style={{marginTop: "30px"}}>
                                        <input className="col-xs-2 col-xs-offset-5 col-sm-2 col-sm-offset-5"
                                            id="saveButton" type="submit" value="SAVE"/>
                                    </div>
                                </form>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

module.exports = Settings;
