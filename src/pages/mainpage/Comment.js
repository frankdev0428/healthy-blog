import React, { Component } from 'react'
import Navs from '../../access/component/Navs';
import Footer from '../../access/component/Footer';
import '../../access/main.css';

export default class Comment extends Component {
  render() {
    return (
      <div className='comment'>
        <Navs />
        <h2>This is Footer Page</h2>
      </div>
    )
  }
}
