import React, { Component } from 'react'
import Navs from '../access/component/Navs';
import '../access/main.css';

export default class About extends Component {
  render() {
    return (
      <div className='about'>
        <Navs />
        <h2>This is About Page</h2>
      </div>
    )
  }
}
