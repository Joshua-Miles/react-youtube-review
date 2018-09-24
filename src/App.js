import React, { Component } from "react"
import SearchBar from './SearchBar'
import VideoPlayer from './VideoPlayer'
import VideoList from './VideoList'
import keys from "./keys";

const API_URL = `https://www.googleapis.com/youtube/v3/search?part=snippet&key=${keys.API_KEY}`

class App extends Component {

  state = {
    selectedVideo: null,
    videoList: []
  }

  fetchData(searchTerm){
        fetch(`${API_URL}&q=${searchTerm}&type=video`)
            .then( response => response.json())
            .then( response => this.setState({ videoList: response.items })  )
    }

     componentDidMount(){
        this.fetchData('cats')
    }

  selectVideo = video => {
    this.setState({ selectedVideo:video })
  }

  videoSearch = searchTerm => {
    this.fetchData(searchTerm)
  }

  render() {
    // console.log('State', this.state)
    // console.log('Props', this.props)
    return (
    <div>
      <SearchBar searchTerm={this.state.searchTerm} onVideoSearch={this.videoSearch}/>
      <VideoPlayer video={this.state.selectedVideo} />
      <VideoList videoList={this.state.videoList} searchTerm={this.state.searchTerm} onVideoClick={this.selectVideo} />
    </div>
    )
  }

}

export default App;

// {
//   "kind": "youtube#searchListResponse",
//   "etag": "\"XI7nbFXulYBIpL0ayR_gDh3eu1k/wFFURzAB6cznK6uh7zObOlGoZGs\"",
//   "nextPageToken": "CAUQAA",
//   "regionCode": "US",
//   "pageInfo": {
//    "totalResults": 1000000,
//    "resultsPerPage": 5
//   },
//   "items": [
//    {
//     "kind": "youtube#searchResult",
//     "etag": "\"XI7nbFXulYBIpL0ayR_gDh3eu1k/CIzHxn5Tg3A4s2nJ1YNkNe9bwj8\"",
//     "id": {
//      "kind": "youtube#video",
//      "videoId": "hY7m5jjJ9mM"
//     },
//     "snippet": {
//      "publishedAt": "2017-05-31T09:30:02.000Z",
//      "channelId": "UC9obdDRxQkmn_4YpcBMTYLw",
//      "title": "CATS will make you LAUGH YOUR HEAD OFF - Funny CAT compilation",
//      "description": "Cats are amazing creatures because they make us laugh all the time! Watching funny cats is the hardest try not to laugh challenge! Just look how all these cats ...",
//      "thumbnails": {
//       "default": {
//        "url": "https://i.ytimg.com/vi/hY7m5jjJ9mM/default.jpg",
//        "width": 120,
//        "height": 90
//       },
//       "medium": {
//        "url": "https://i.ytimg.com/vi/hY7m5jjJ9mM/mqdefault.jpg",
//        "width": 320,
//        "height": 180
//       },
//       "high": {
//        "url": "https://i.ytimg.com/vi/hY7m5jjJ9mM/hqdefault.jpg",
//        "width": 480,
//        "height": 360
//       }
//      },
//      "channelTitle": "Tiger FunnyWorks",
//      "liveBroadcastContent": "none"
//     }
//    },
//    {
//     "kind": "youtube#searchResult",
//     "etag": "\"XI7nbFXulYBIpL0ayR_gDh3eu1k/3GvmmEApNX5dJzBymRzvcBvZGdQ\"",
//     "id": {
//      "kind": "youtube#video",
//      "videoId": "N2z5dSRkv_I"
//     },
//     "snippet": {
//      "publishedAt": "2018-08-26T11:00:04.000Z",
//      "channelId": "UC9obdDRxQkmn_4YpcBMTYLw",
//      "title": "Bet you havent't LAUGHED THAT HARD before! - Super FUNNY CATS",
//      "description": "The funniest animals on the planet are definitely cats! They never fail to make us laugh and happy! This is the most impossible TRY NOT TO LAUGH challenge ...",
//      "thumbnails": {
//       "default": {
//        "url": "https://i.ytimg.com/vi/N2z5dSRkv_I/default.jpg",
//        "width": 120,
//        "height": 90
//       },
//       "medium": {
//        "url": "https://i.ytimg.com/vi/N2z5dSRkv_I/mqdefault.jpg",
//        "width": 320,
//        "height": 180
//       },
//       "high": {
//        "url": "https://i.ytimg.com/vi/N2z5dSRkv_I/hqdefault.jpg",
//        "width": 480,
//        "height": 360
//       }
//      },
//      "channelTitle": "Tiger FunnyWorks",
//      "liveBroadcastContent": "none"
//     }
//    },
//    {
//     "kind": "youtube#searchResult",
//     "etag": "\"XI7nbFXulYBIpL0ayR_gDh3eu1k/JkELFAyKQf3jC6ObuMsX4Hc3Hhw\"",
//     "id": {
//      "kind": "youtube#video",
//      "videoId": "Rmx1JGTX1yw"
//     },
//     "snippet": {
//      "publishedAt": "2018-07-26T11:00:05.000Z",
//      "channelId": "UC9obdDRxQkmn_4YpcBMTYLw",
//      "title": "Funniest CATS EVER - Die LAUGING NOW!",
//      "description": "Cats are the best pets and animals! Cats and kittens are so funny, they make us laugh and happy! They never fail to amuse us! This is the most impossible TRY ...",
//      "thumbnails": {
//       "default": {
//        "url": "https://i.ytimg.com/vi/Rmx1JGTX1yw/default.jpg",
//        "width": 120,
//        "height": 90
//       },
//       "medium": {
//        "url": "https://i.ytimg.com/vi/Rmx1JGTX1yw/mqdefault.jpg",
//        "width": 320,
//        "height": 180
//       },
//       "high": {
//        "url": "https://i.ytimg.com/vi/Rmx1JGTX1yw/hqdefault.jpg",
//        "width": 480,
//        "height": 360
//       }
//      },
//      "channelTitle": "Tiger FunnyWorks",
//      "liveBroadcastContent": "none"
//     }
//    },
//    {
//     "kind": "youtube#searchResult",
//     "etag": "\"XI7nbFXulYBIpL0ayR_gDh3eu1k/xnkdZlc_5VxbkZ6m9MmlYDICSPY\"",
//     "id": {
//      "kind": "youtube#video",
//      "videoId": "UF3GPcR9Hmk"
//     },
//     "snippet": {
//      "publishedAt": "2018-09-24T16:04:00.000Z",
//      "channelId": "UC499RUHBCxesTo_ppKPlfhg",
//      "title": "猫部屋ライブ映像   Cats ＆ Kittens room 【Miaou みゃう】",
//      "description": "猫達が住む猫専用部屋のライブ映像です】猫部屋には他に3台のライブカメラがあります。 猫が映っていなければ【猫ハウス1・2、キャットタワ...",
//      "thumbnails": {
//       "default": {
//        "url": "https://i.ytimg.com/vi/UF3GPcR9Hmk/default_live.jpg",
//        "width": 120,
//        "height": 90
//       },
//       "medium": {
//        "url": "https://i.ytimg.com/vi/UF3GPcR9Hmk/mqdefault_live.jpg",
//        "width": 320,
//        "height": 180
//       },
//       "high": {
//        "url": "https://i.ytimg.com/vi/UF3GPcR9Hmk/hqdefault_live.jpg",
//        "width": 480,
//        "height": 360
//       }
//      },
//      "channelTitle": "Miaou",
//      "liveBroadcastContent": "live"
//     }
//    },
//    {
//     "kind": "youtube#searchResult",
//     "etag": "\"XI7nbFXulYBIpL0ayR_gDh3eu1k/qT9xssHPIvatz74gf98V67GmP4s\"",
//     "id": {
//      "kind": "youtube#video",
//      "videoId": "uCLEq9V0-Yk"
//     },
//     "snippet": {
//      "publishedAt": "2018-05-17T13:02:36.000Z",
//      "channelId": "UCKy3MG7_If9KlVuvw3rPMfw",
//      "title": "SUPER WEIRD CATS that will totally CONFUSE YOU! - Extremely FUNNY CAT VIDEOS compilation",
//      "description": "Here are videos of super weird cats and kittens that will confuse you and at the end, most important, make you laugh! These cats are so super hilarious that I bet ...",
//      "thumbnails": {
//       "default": {
//        "url": "https://i.ytimg.com/vi/uCLEq9V0-Yk/default.jpg",
//        "width": 120,
//        "height": 90
//       },
//       "medium": {
//        "url": "https://i.ytimg.com/vi/uCLEq9V0-Yk/mqdefault.jpg",
//        "width": 320,
//        "height": 180
//       },
//       "high": {
//        "url": "https://i.ytimg.com/vi/uCLEq9V0-Yk/hqdefault.jpg",
//        "width": 480,
//        "height": 360
//       }
//      },
//      "channelTitle": "Tiger Productions",
//      "liveBroadcastContent": "none"
//     }
//    }
//   ]
//  }