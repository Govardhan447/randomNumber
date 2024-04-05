import {Component} from 'react'
import './index.css'

let randomNum = 0
class EvenOddApp extends Component {
  state = {num: 0}
  increaseNumber = () => {
    randomNum = Math.round(Math.random() * 100)
    this.setState(prevState => ({
      num: (prevState.num = randomNum),
    }))
  }

  renderAuthcountType = () => {
    const {num} = this.state

    return num % 2 === 0 ? <p>Count is Even</p> : <p>Count is Odd</p>
  }

  render() {
    return (
      <div className="container">
        <div className="bg-container">
          <h1>Count {randomNum}</h1>
          {this.renderAuthcountType()}
          <button className="button" onClick={this.increaseNumber}>
            Increment
          </button>
          <p className="btm-line">
            *Increase By Random Number Between 0 to 100
          </p>
        </div>
      </div>
    )
  }
}

export default EvenOddApp
