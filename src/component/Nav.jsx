import React, { useEffect } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { images } from '../assets/assets'
import { navData } from '../data/navData'
import '../styles/nav.css'

const Nav = () => {
  const [clicked, setClicked] = useState()
  useEffect(() => {
    const main = document.querySelector('main')
    main.onclick=()=>{
      setClicked(false)
    }
  }, [])
  

  return (
      <nav id="nav">
        <div className="logo">
          <img src={images.Logo} alt="" />
        </div>
        <div className={`menu-holder ${clicked?'show':'closed'}`}>
          {
            navData.map(menu=>{
              return(
                <Link to={menu.link}>
                  <p className='menu-link'>
                    {
                      menu.name
                    }
                  </p>
                </Link>
              )
            })
          }
        </div>
        <div 
        className={`menuButtons ${clicked?'menu-clicked':null}`}
        onClick={e=>{setClicked(!clicked);!clicked?e.target.classList.remove('menu-clicked'):null}}
        >
          <div className="menuLines"></div>
          <div className="menuLines"></div>
          <div className="menuLines"></div>
        </div>
      </nav>
  )
}

export default Nav