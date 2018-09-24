import React, { Component } from "react";

class VideoCard extends Component {

    handleClick = e => {
        this.props.onClick(this.props.video)
    }

    render(){
        let video = this.props.video.snippet
        return (
        <li onClick={this.handleClick}>
            <img src={video.thumbnails.default.url}></img><br />
            {video.title}
        </li>   
        )
    }

}

export default VideoCard