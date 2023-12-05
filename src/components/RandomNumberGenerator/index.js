// Write your code here
import {Component} from 'react'
import './index.css'

class RandomNumberGenerator extends Component {
  state = {randomNumber: 0}

  onClick = () => {
    const random = Math.ceil(Math.random() * 100)
    this.setState({
      randomNumber: random,
    })
  }

  render() {
    const {randomNumber} = this.state
    return (
      <div className="bg">
        <div className="bg-container">
          <h1>Random Number</h1>
          <p>Generate a random number in the range of 0 to 100</p>
          <button className="btn" onClick={this.onClick}>
            Generate
          </button>
          <p>{randomNumber}</p>
        </div>
      </div>
    )
  }
}

export default RandomNumberGenerator
