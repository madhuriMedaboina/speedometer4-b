// Write your code here

import {Component} from 'react'
import './index.css'

class Speedometer extends Component {
  state = {count: 0}

  onIncrement = () => {
    this.setState(prevState => {
      console.log(`previuos state value is ${prevState.count}`)
      return {count: prevState.count + 10}
    })
  }

  onDecrement = () => {
    this.setState(prevState => {
      console.log(`previuos state value is ${prevState.count}`)
      return {count: prevState.count - 10}
    })
  }

  render() {
    const {count} = this.state
    return (
      <div className="container">
        <h1 className="main-heading">SPEEDOMETER</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
          className="image"
          alt="speedometer"
        />
        <h1 className="heading">Speed is {count}mph</h1>
        <p className="para">Min Limit is 0mph, Max Limit is 200mph</p>
        <div>
          <button className="button" type="button" onClick={this.onIncrement}>
            {' '}
            Accelerate{' '}
          </button>
          <button
            className="button-style"
            type="button"
            onClick={this.onDecrement}
          >
            {' '}
            Apply Brake{' '}
          </button>
        </div>
      </div>
    )
  }
}

export default Speedometer
