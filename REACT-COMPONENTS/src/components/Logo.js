import React from 'react'
import styles from './Logo.module.css'
import apple from '../images/apple.jpg'
import samsung from '../images/samsung.jpg'
import xiaomi from '../images/xiaomi.png'
function Logo() {
  return (
    <div className={styles.container}>
     <h3>Who support us?</h3>
     <img src={apple} alt='logo'/>
     <img src={samsung} alt= 'logo'/>
     <img src={xiaomi} alt='logo'/>
    </div>
  )
}

export default Logo