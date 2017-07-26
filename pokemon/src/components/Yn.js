import React from 'react'
import Bulma from 'bulma/css/bulma.css'
import Axios from 'axios'

class Yn extends React.Component {
  constructor() {
    super()
    this.state = {
      question: []
    }
  }

  componentWillMount () {
    var self = this
    Axios.get('https://yesno.wtf/api')
    .then(function (response) {
      console.log(response.data);
      // localStorage.setItem('answer', JSON.stringify(response.data.answer))
      // localStorage.setItem('image', JSON.stringify(response.data.image))
      self.setState({
        question: response.data
      })
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  GetData () {
    const style = {
      card: {
        marginLeft: '500px',
        marginRight: '500px'
      }
    }
    return (
      <div className="card" style={style.card}>
      <h1>{this.state.question.answer}</h1>
        <div className="card-image">
          <figure className="image is-4by3">
            <img src={this.state.question.image} alt="Image"/>
          </figure>
        </div>
        <div className="card-content">
          <div className="content">
            <h1>{this.state.question.answer}</h1>
          </div>
        </div>
      </div>
    )
  }

  render () {
    return (
      <div>
        <h1>DENG DENG DENG....!!</h1>
        {this.state.question === '' ? "wait.." : this.GetData()}
      </div>
    )
  }
}


export default Yn
