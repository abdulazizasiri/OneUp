var React = require('react');
var Link = require('react-router').Link;
var Video = require('./Video.js');

class Home extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {

        var videoComponents = this.props.videos.map(function(videodata, index) {
            var rank = index + 1;
            return (
                <Video key={index} rank={rank} metadata={videodata}/>
            );
        });
        return (
            <div className="home container-fluid">
                <div className="row">
                    <div className="col-xs-12 col-md-3 col-md-offset-1 text-center"
                        style={{background: '', height: '60px', top: '90px'}}>
                        <ul style={{marginTop: "15px"}} id="week_or_alltime">
                            <li><Link to="/"><span>WEEK</span></Link></li>
                            <b>|</b>
                            <li><Link to="/alltime"><span>ALL-TIME</span></Link></li>
                        </ul>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-12 col-md-4 col-md-offset-4 text-center"
                        style={{background: '', height: '40px', top: '90px'}}>
                        <p className="weekName">WEEK 1</p>
                    </div>
                </div>
                {videoComponents}
            </div>
        );
    }
}

module.exports = Home;
