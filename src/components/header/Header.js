import React, { Component } from 'react'
import Start from './Start'

export class Header extends Component {
  render() {
    return (
      <header>
      <div className='container'>
        <Start/>
      </div>
      </header>
    )
  }
}

export default Header
