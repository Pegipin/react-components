import React from 'react'
import styles from './Navbar.module.css'
import logo from '../images/Logo.png'

function Navbar() {
  return (
    <header className={styles.header}>

<div className={styles.listContainer}>
               <ul className={styles.list}>
               <li>Home Page</li>
               <li>Products</li>
               <li>About Us</li>
          </ul>
</div>

<div className={styles.logo}>
           <img  className={styles.logo} src={logo} alt='logo'></img>
</div>

    </header>
  )
}

export default Navbar