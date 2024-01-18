import React, { Component } from 'react'
import Filled from './Filled.gif'
export default class Loading extends Component {
  render() {
    return (
       <div className="text-center">
        <img src={Filled} alt="" />
      </div>
    )
  }
}
