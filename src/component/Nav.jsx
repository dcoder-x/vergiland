import React, { useEffect } from 'react'
import { useState } from 'react'
import { Link, useLocation, useNavigate, useNavigation } from 'react-router-dom'
import { Icons, images } from '../assets/assets'
import { navData } from '../data/navData'
import '../styles/nav.css'
import Booking from './Booking'

const Nav = () => {
  const [clicked, setClicked] = useState()
  const [booking, setbooking] = useState()
  const {pathname} = useLocation()
  console.log(pathname.split('/')[1])
  const navigate=useNavigate()
  useEffect(() => {
    const main = document.querySelectorAll('main')
    if (main) {
      main.forEach(main=>{
        main.onclick=()=>{
          setClicked(false)
          console.log(main)
        }
      })
    }

  }, [])
  

  return (
      <nav id="nav">
      
          <div className="logo" onClick={e=>{navigate('/')}}>
            <img src={images.Logo} alt="" />
          </div>

        <div className={`menu-holder ${clicked?'show':'closed'}`}>
          {
            navData.map(menu=>{
              return(
                <Link to={menu.link}>
                  <p className={`menu-link` } style={{color:pathname.split('/')[1].toLocaleLowerCase()==menu.name.toLocaleLowerCase()?'rgba(72, 183, 96, 1)':'black'}}>
                    {
                      menu.name
                    }
                  </p>
                </Link>
              )
            })
          }

              <button 
                className="action-btn sm-booking"
                onClick={e=>{setbooking(true);navigate('/booking')}}
                style={{display:clicked?'block':'none'}}
              >
                Booking
              </button> 


        </div>
          <button 
            className="action-btn booking-btn"
            onClick={e=>{setbooking(true);navigate('/booking')}}
          >
            Booking
          </button>

        <div 
        className={`menuButtons ${clicked?'menu-clicked':null}`}
        onClick={e=>{setClicked(!clicked);!clicked?e.target.classList.remove('menu-clicked'):null}}
        >
          <p>
            Menu
          </p>
          <img src={Icons.menu} alt="" />
        </div>
      </nav>
  )
}

export default Nav