import React from 'react'
import styles from './Banner.module.css'
import banner from '../images/banner.jpg'

function Banner() {
  return (
    <div className={styles.container}>
          <img src={banner} alt='banner'></img>
          <div className={styles.textContainer} >
              <h1>PegiPinkey</h1>
              <p>
               I am Learning <span>React.js!</span>
              </p>
          </div>
     </div>
    
  )
}

export default Banner