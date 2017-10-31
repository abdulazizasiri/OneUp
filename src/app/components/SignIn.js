import React from 'react';
import css from "../CSS/SignInStyle.css";
import styles from "../CSS/SignInStyle.css";


const SignIn = () => {

  const showSignUpBox = () => {
      $('#loginbox').hide();
      $('#signupbox').show();
  };

  return(
  <div className="sign container-fluid" style={{ display: "true"}}>
     <div id="loginbox" style={{marginTop: "50px"}}
        className="mainbox col-sm-6 col-sm-offset-3 col-md-6 col-offset-3 col-lg-6 col-lg-offset-3">
        <div className="panel panel-info">
           <div className="panel-headingA" style={{paddingTop: "15px"}}>
             <center><font size="5" color="white">OneUp</font></center>
           </div>
           <div style={{paddingTop: "20px"}} className="panel-bodyA">
              <div style={{display: "none"}} id="login-alert" className="alert alert-danger col-sm-12"></div>
              <form id="loginform" className="form-horizontal" role="form">
                  <div style={{marginBottom: "25px"}} className="input-group">
                     <span className="input-group-addon"><i className="glyphicon glyphicon-envelope"></i></span>
                       <input id="login-username" type="text" className="form-control"
                            name="username" style={{width: "95%"}} placeholder="EMAIL OR USERNAME"/>
                  </div>
                  <div style={{marginBottom: "25px"}} className="input-group">
                     <span className="input-group-addon"><i className="glyphicon glyphicon-lock"></i></span>
                        <input id="login-password" type="text" className="form-control"
                            name="password" style={{width: "95%"}} placeholder="PASSWORD"/>
                  </div>
                  <div className="input-group">
                      <div style={{marginTop: "10px"}} className="form-group">
                        <div className="row">
                          <button type="button" style={{marginLeft: "75%"}}
                              id="btn-default">LOGIN</button>
                        </div>
                        <div className="row">
                          <button type="button" style={{marginLeft: "75%", marginTop: "10px"}}
                              id="btn-default" onClick={showSignUpBox}>SIGN UP</button>
                        </div>
                      </div>
                  </div>
              </form>
           </div>
        </div>
     </div>

     <div id="signupbox" style={{ marginTop: "50px", display: "none"}}
        className="mainbox col-md-6 col-md-offset-3 col-sm-6 col-sm-offset-3">
        <div className="panel panel-info">
           <div className="panel-headingB" style={{paddingTop: "15px"}}>
              <center><font size="5" style={{color: "white"}}>Sign Up</font></center>
           </div>
           <div style={{paddingTop: "20px"}} className="panel-bodyB">
              <form id="signupform" className="form-horizontal" role="form">
                  <font style={{color: "white", marginLeft: "40px"}} size="3">Enter an email</font>
                  <div style={{marginBottom: "25px"}} className="input-group">
                     <span className="input-group-addon"><i className="glyphicon glyphicon-envelope"></i></span>
                     <input id="signup-email" type="text" className="form-control"
                         name="email" style={{width: "95%"}} placeholder="EMAIL"/>
                  </div>
                  <font style={{color: "white", marginLeft: "40px"}} size="3">Enter a username</font>
                  <div style={{marginBottom: "25px"}} className="input-group">
                     <span className="input-group-addon"><i className="glyphicon glyphicon-user"></i></span>
                     <input id="signup-username" type="text" className="form-control"
                         name="username" style={{width: "95%"}} placeholder="USERNAME"/>
                  </div>
                  <font style={{color: "white", marginLeft: "40px"}} size="3">Enter a password</font>
                  <div style={{marginBottom: "25px"}} className="input-group">
                     <span className="input-group-addon"><i className="glyphicon glyphicon-lock"></i></span>
                     <input id="signup-password" type="text" className="form-control"
                         name="password" style={{width: "95%"}} placeholder="PASSWORD"/>
                  </div>
                  <div className="input-group">
                     <div style={{marginTop: "10px"}} className="form-group">
                         <button type="button" style={{marginLeft: "30px"}}
                             className="createAccountButton">Create Account</button>
                     </div>
                  </div>
              </form>
           </div>
        </div>
     </div>
  </div>
);
};



export default SignIn
