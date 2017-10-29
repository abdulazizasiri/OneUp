import React from "react";
import styles from "../CSS/HomeStyle.css";
import css from "../CSS/HomeStyle.css";
import { Player } from 'video-react';


const Home = () => (

  <div className="container-fluid">
    <div className="row">
      <div className="col-xs-12 col-md-3 text-center" style={{background:'black', height:'60px', top:'90px'}}>
        <button type="button" className="weekbtn btn-link">WEEK</button>
        <b>|</b>
        <button type="button" className="alltime btn-link">ALL-TIME</button>
      </div>
    </div>
    <div className="row">
      <div className="col-xs-12 col-md-4 col-md-offset-4 text-center"style={{background:'black', height:'40px', top:'90px'}}>
        <p className="weekName">WEEK 28</p>
      </div>
    </div>

    <div className="row">
      <div className="col-xs-2 col-md-2" style={{background:'grey', height:'90px', top:'90px'}}>
          <div className="divider"><div className="inner"></div></div>
          <div className="text-left">1</div>
      </div>
      <div className="col-xs-2 col-md-2 " style={{background:'red', height:'90px', top:'90px'}}></div>
      <div className="col-xs-2 col-md-2 " style={{background:'blue', height:'90px', top:'90px'}}></div>
      <div className="col-xs-2 col-md-2 " style={{background:'purple', height:'90px', top:'90px'}}></div>
      <div className="col-xs-2 col-md-2 " style={{background:'yellow', height:'90px', top:'90px'}}></div>
      <div className="col-xs-2 col-md-2 " style={{background:'pink', height:'90px', top:'90px'}}>
          <div className="divider"><div className="inner"></div></div>
          <div className="text-right"><a href="#" className="glyphicon glyphicon-chevron-up"></a></div>
      </div>

      <div className="col-xs-12 col-md-10 col-md-offset-1" style={{background:'grey', height:'90px', top:'90px'}}>
          <div className="divider"><div className="inner"></div></div>
      </div>

      <div className="col-xs-12 col-md-10 col-md-offset-1" style={{background:'grey', height:'90px', top:'90px'}}>
          <div className="divider"><div className="inner"></div></div>
      </div>

    </div>
  </div>
)

export default Home
