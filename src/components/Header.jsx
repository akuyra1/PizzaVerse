import React from 'react'
import headerStyles from '../styles/Header.module.css'


export default function Header() {
  return (
    <div>
      <div className={headerStyles.headerContainer}>
        <h1 className={headerStyles.mainTitle}><span className={headerStyles.mainTitleSpan}>Pizza</span>Verse</h1>
        <nav>
            <ul className={headerStyles.navListContainer}> 
                <li><a href='/' className={headerStyles.navLi}>Deals</a></li>
                <li><a href='/' className={headerStyles.navLi}>Pizzas</a></li>
                <li><a href='/' className={headerStyles.navLi}>Melts</a></li>
                <li><a href='/' className={headerStyles.navLi}>Sides</a></li>
                <li><a href='/' className={headerStyles.navLi}>Desserts</a></li>
                <li><a href='/' className={headerStyles.navLi}>Drinks</a></li>
                <li><a href='/' className={headerStyles.navLi}>Dips</a></li>
            </ul>
        </nav>
      </div>
    </div>
  )
}
