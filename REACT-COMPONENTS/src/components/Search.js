import React, { Component } from 'react'
import styles from './Search.module.css'
export default class Search extends Component {
  render() {
    return (
      <div className={styles.container}>

       <p>Search what do you want</p>
       <input type="text" placeholder='Search...'></input>
      </div>
    )
  }
}
