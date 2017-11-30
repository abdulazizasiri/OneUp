var React = require('react');
var Link = require('react-router').Link;

const Home = () => {

    return (
        <div className="home container-fluid">
            <div className="row">
                <div className="col-xs-12 col-md-3 col-md-offset-1 text-center"
                    style={{background: 'black', height: '60px', top: '90px'}}>
                    <ul style={{marginTop: "15px"}} id="week_or_alltime">
                        <li><Link to="/"><span>WEEK</span></Link></li>
                        <b>|</b>
                        <li><Link to="/alltime"><span>ALL-TIME</span></Link></li>
                    </ul>
                </div>
            </div>
            <div className="row">
                <div className="col-xs-12 col-md-4 col-md-offset-4 text-center"
                    style={{background: 'black', height: '40px', top: '90px'}}>
                    <p className="weekName">WEEK 28</p>
                </div>
            </div>

            <div className="row">
                <div className="col-xs-12 col-md-10 col-md-offset-1"
                    style={{background: '', height: '90px', top: '90px'}}>
                    <div className="divider"><div className="inner"></div></div>
                    <div className="row">
                        <div className="col-xs-2 col-md-2" style={{background: '', height: '90px'}}>
                            <div className="text-left">1</div>
                        </div>
                        <div className="col-xs-2 col-md-2" style={{background: '', height: '90px'}}>
                        </div>
                        <div className="col-xs-6 col-md-6" style={{background: '', height: '90px'}}>
                        </div>
                        <div className="col-xs-2 col-md-2" style={{background: '', height: '90px'}}>
                            <div className="text-right"><a href="#"
                                className="glyphicon glyphicon-chevron-up"></a></div>
                            <div className="text-right"><a href="#"
                                className="glyphicon glyphicon-chevron-down"></a></div>
                        </div>
                    </div>
                </div>

                <div className="col-xs-12 col-md-10 col-md-offset-1"
                    style={{background: '', height: '90px', top: '90px'}}>
                    <div className="divider"><div className="inner"></div></div>
                    <div className="row">
                        <div className="col-xs-2 col-md-2" style={{background: '', height: '90px'}}>
                            <div className="text-left">2</div>
                        </div>
                        <div className="col-xs-2 col-md-2" style={{background: '', height: '90px'}}>
                        </div>
                        <div className="col-xs-6 col-md-6" style={{background: '', height: '90px'}}>
                        </div>
                        <div className="col-xs-2 col-md-2" style={{background: '', height: '90px'}}>
                            <div className="text-right"><a href="#"
                                className="glyphicon glyphicon-chevron-up"></a></div>
                            <div className="text-right"><a href="#"
                                className="glyphicon glyphicon-chevron-down"></a></div>
                        </div>
                    </div>
                </div>

                <div className="col-xs-12 col-md-10 col-md-offset-1"
                    style={{background: '', height: '90px', top: '90px'}}>
                    <div className="divider"><div className="inner"></div></div>
                </div>
            </div>
        </div>
    );
};


module.exports = Home;
