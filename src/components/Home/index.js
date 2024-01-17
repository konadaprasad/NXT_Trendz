import {Component} from 'react'

import Header from '../Header'

import './index.css'

class Home extends Component {
  state = {}

  render() {
    return (
      <div className="home-cont">
        <Header />
        <div className="description">
          <div className="cont1">
            <h1 className="heading">Clothes That Get YOU Noticed</h1>
            <p className="para1">
              Fashion is part of the daily air life it does not quite to help
              that it changes all the time. Clothes have always been a maker of
              the era and we are in a revolution .Your fashion makes you been
              seen and heard that way you are. So, celebrate the seasons new and
              exciting fashion in your own way.
            </p>
            <button className="bnt1">shop Now</button>
          </div>
          <div className="cont2">
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png"
              alt="clothes that get you noticed"
              className="img"
            />
          </div>
        </div>
      </div>
    )
  }
}
export default Home
