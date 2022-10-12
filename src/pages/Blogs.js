import React, { Component } from 'react'
import Navs from '../access/component/Navs';
import '../access/main.css';
export default class Blogs extends Component {
  render() {
    return (
      <div className='blogs'>
        <Navs />
        <h2>This is Blogs Page</h2>
      </div>
    )
  }
}
