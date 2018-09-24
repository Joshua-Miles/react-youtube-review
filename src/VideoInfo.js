import React, { Component } from "react";

class VideoInfo extends Component {

  render() {
    return (
    <div> 
        <h2>{this.props.video.snippet.title}</h2>
        <p>{this.props.video.snippet.description}</p>
    </div>
    )
  }
  
}

export default VideoInfo;