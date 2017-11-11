import React from 'react';
import css from "../CSS/OneUpVideo.css";
import styles from "../CSS/OneUpVideo.css";


const OneUpVideo = () => {
    const incrementVote = () => {
        var computerScore = document.getElementById('values');
        var number = computerScore.innerHTML;
        number++;
        computerScore.innerHTML = number;
    };
    backHome = () =>{
        return {videoView: false}
    };
    showVideo = () => {
        this.setState({videoView: true})
    };
    const ShowButton = () => {
        return (
            <div>
                   <div className='container-1'>
                            <div className='bx0'>{this.props.count}</div>
                            <div className='bx1'>
                            <div id="youtube-video">
                                    <a ClassName="btn_video"onClick={this.showVideo}> 
                                    <video> 
                                    <source src={this.props.vid_link} type="video/mp4" />
                                    </video> </a>     
                                </div>  
                             </div>
                             <div className='user_info_box'>
                                <div className='user_info_video'>{this.props.text}</div>
                              <span>By: <a href='#'className='text-danger user_info1'> {this.props.user}</a></span>
                                <span><div className='user_info_date'>{this.props.date}</div></span>
                             </div> 
                             <div className='rate'> 
                             <button onClick={this.incrementVote}id='btn-up'>UP</button>
                            <p className="btn-up" id='values'> 120 </p>
                            <button onClick={this.decrementVote} className='btn-up1'>DOWN</button>
                       </div>
                </div>
        </div>
        );

    };
    const  showVideoView = () => {
        return(
            <div>
                <div className="container">
                        <div className="display-4 head"> Week 12 - Ranked #12 </div>
                        <div className="row">
                                <div className="forward col">
                                    <button className="fbutton"> Forward </button>
                                     </div> 
                                <video controls className="col">
                                    <source src="skate.mp4" type="video/mp4"/>
                                    <source src="movie.ogg" type="video/ogg"/> 
                                </video>                 
                        <div className="backward col">
                        <button className="bbutton"> Backward </button>
                        </div>
                    </div>
                    </div>
                <div className="user_info">

                 <div className='user_box'>

                 	<p className='info'>720 Nollie Tre Flip</p>
                 	<span className='info'>By: <a  href='#'className='text-danger'>User Name</a></span>
                 	<p className="info"> Posted: 10/5/17 </p>
                 </div>
                 <div id="usercmment">
                 <p className="comment">This gnarly line took me 100+ tries. but finally nailed the 720 but finally nailed the 720 Nollie Tre Flip at the end hey but finally nailed the 720 but finally nailed the 720. </p>
                    </div>
           				<div className="voting_sys">
           					<button>up</button>
           					<p className="vote_number"> 1 </p>
           					<button>Down</button>
           				</div> 
                 </div>
                </div>
        )
    };
};
export default OneUpVideo