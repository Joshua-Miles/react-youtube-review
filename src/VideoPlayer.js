import React, { Component } from "react";
import VideoInfo from './VideoInfo'
class VideoPlayer extends Component {

  render() {
    console.log('State', this.state)
    console.log('Props', this.props)
    if(!this.props.video){
        return <div>No Video Selected</div>
    }
    let video = this.props.video
    const embedUrl = `https://www.youtube.com/embed/${video.id.videoId}`;
    return (
        <div style={{width:'70%', float:'left'}}> 
            <iframe src={embedUrl}></iframe>
            <VideoInfo video={video}/>
        </div>)
  }
  
}

export default VideoPlayer;