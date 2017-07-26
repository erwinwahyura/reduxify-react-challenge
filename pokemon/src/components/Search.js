import React, { Component } from 'react'

class Search extends Component {
  constructor() {
    super()
    this.state = {
      hasilSearch: ''
    }
  }

  render () {
    return (
      <div> this is search: {this.props.match.params.id}</div>
    )
  }
}

export default Search
