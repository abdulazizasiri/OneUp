var React = require('react');
var Modal = require('./Modal.js');

class Video extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          isModalOpen: false,
          upvotes: props.metadata.totalUpvotes
        };
        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
        this.upvote = this.upvote.bind(this);
        this.downvote = this.downvote.bind(this);
    }

    openModal() {
        this.setState({ isModalOpen: true });
    }

    closeModal() {
        this.setState({ isModalOpen: false });
    }

    upvote() {
        var newVotes = this.state.upvotes + 1;
        var videoID = this.props.metadata._id;

        this.setState({
            upvotes: newVotes
        });

        fetch('/', {
            method: 'POST',
            body: JSON.stringify({
                'newTotalUpvotes': newVotes,
                'videoID': videoID
            }),
            headers: {'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'}
        }).then(function(response) {
            return response.json()
        })
    }

    downvote() {
        var newVotes = this.state.upvotes - 1;
        var videoID = this.props.metadata._id;

        this.setState({
            upvotes: newVotes
        });

        fetch('/', {
            method: 'POST',
            body: JSON.stringify({
                'newTotalUpvotes': newVotes,
                'videoID': videoID
            }),
            headers: {'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'}
        }).then(function(response) {
            return response.json()
        })
    }

    render() {
        return (
            <div className="row">
                <div className="col-xs-12 col-md-10 col-md-offset-1"
                    style={{background: '', height: '90px', top: '90px'}}>
                    <div className="divider"><div className="inner"></div>
                    </div>
                    <div className="row">
                        <div className="col-xs-2 col-md-1" style={{background: '', height: '90px'}}>
                            <div className="text-left">{this.props.rank}</div>
                        </div>

                        <div className="col-xs-2 col-md-2" style={{background: '', height: '90px'}}>
                            <button onClick={this.openModal} className="video btn-primary"
                                style={{height: '80px', width: '120px', position: 'absolute', top: '5px'}}>Video</button>
                            <div className="center-modalSize" style={{position: 'relative', top: '150px', left: '110px'}}>
                                <Modal isOpen={this.state.isModalOpen} onClose={() => this.closeModal}>
                                    <div className="col-xs-12 col-md-12" style={{background: 'pink'}}>
                                        <h1 style={{color: 'white'}}>WEEK 1 -- RANKED #1
                                            <button onClick={this.closeModal}
                                                className="glyphicon glyphicon-remove"></button>
                                        </h1>
                                    </div>
                                    <div>
                                        <div className="col-xs-12 col-md-12 text-center" style={{background: ''}}>
                                            <video width="500" height="240" src={this.props.metadata.videoPath} controls>
                                            </video>
                                        </div>
                                    </div>
                                    <div className="col-xs-12 col-md-4 text-center"
                                        style={{background: 'red', top: '20px', height: '90px'}}>
                                        <p> {this.props.metadata.title} <br />
                                        by: {this.props.metadata.username} <br /> posted: date </p>
                                    </div>
                                    <div className="col-xs-12 col-md-8"
                                        style={{background: '', top: '20px', height: '90px', color: 'white'}}>
                                        <p> {this.props.metadata.description} </p>
                                    </div>
                                </Modal>
                            </div>

                        </div>


                        <div className="col-xs-3 col-md-2" style={{background: 'black', height: '90px'}}>
                            <div className = "videoInfo" style={{position: 'absolute', top: '12px'}}>
                                <p color="white"> {this.props.metadata.title} <br />
                                by: {this.props.metadata.username} <br /> posted: date</p>
                            </div>
                        </div>
                        <div className="col-xs-3 col-md-5" style={{background: 'black', height: '90px'}}>
                            <div className="description" style={{position: 'absolute', top: '12px'}}>
                                <p> {this.props.metadata.description} </p>
                            </div>
                        </div>
                        <div className="col-xs-2 col-md-2 text-center" style={{background: '', height: '90px'}}>
                            <div className = "votingArrows" style={{position: 'absolute', left: '60px'}}>
                                <div className="text-right"><a href="#"
                                    onClick={this.upvote} className="glyphicon glyphicon-chevron-up"></a>
                                </div>
                                <div className="col xs-12 col-md-12 text-center"
                                    style ={{background: '', position: 'relative', top: '2px', right: '31px'}}>
                                    <span style={{color: 'white', fontSize: '15px'}}>{this.state.upvotes}</span>
                                </div>
                                <div className="text-right"><a href="#"
                                    onClick={this.downvote} className="glyphicon glyphicon-chevron-down"></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-xs-12 col-md-10 col-md-offset-1"
                    style={{background: '', height: '0px', top: '90px'}}>
                    <div className="divider"><div className="inner"></div></div>
                </div>

            </div>
        );
    }
}

module.exports = Video;
