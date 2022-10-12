import React, { Component } from 'react'
import Navs from '../access/component/Navs';
import Footer from '../access/component/Footer';
import '../access/main.css';

export default class Nutrition extends Component {
  render() {
    return (
      <div className='nutrition'>
        <Navs />
        <h2>This is Nutrition Page</h2>
      </div>
    )
  }
}
