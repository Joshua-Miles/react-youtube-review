import React, { Component } from "react";

class SearchBar extends Component {

    state = {
        value: undefined
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.onVideoSearch(this.state.value)
    }

    changeValue = e => {
        let searchTerm = e.target.value
        clearTimeout(this.timer)
        this.timer = setTimeout(() => {
            this.props.onVideoSearch(searchTerm)
        }, 1000)
    }
    
  render() {
    return (
        <form onSubmit={this.handleSubmit} >
            <input onInput={this.changeValue} type="text" ></input>
        </form>
    )
  }
  
}

export default SearchBar;