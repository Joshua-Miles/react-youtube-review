import React, { Component } from "react";
import VideoCard from './VideoCard'
// import keys from "./keys";

// const API_URL = `https://www.googleapis.com/youtube/v3/search?part=snippet&key=${keys.API_KEY}`

class VideoList extends Component {

    // state = {
    //     videoList: []
    // }

    // fetchData(){
    //     fetch(`${API_URL}&q=${this.props.searchTerm}&type=video`)
    //         .then( response => response.json())
    //         .then( response => this.setState({ videoList: response.items })  )
    // }

    // componentDidMount(){
    //     this.fetchData()
    // }

    // componentDidUpdate(prevProps) {
    //     // Typical usage (don't forget to compare props):
    //     if (this.props.searchTerm !== prevProps.searchTerm) {
    //       this.fetchData();
    //     }
    //   }

    render() {
        // console.log('State', this.state)
        // console.log('Props', this.props)
        return (
            <ul style={{ width: '30%', float:'right'}}> 
            {this.props.videoList.map( video => (
                <VideoCard video={video} onClick={this.props.onVideoClick} />
            )) }
            </ul>
        )
    }
  
}

export default VideoList;