import { ArrowDropDown, Notifications, Search } from '@mui/icons-material'
import './navbar.scss'
import { useState } from 'react'

const Navbar = () => {

  const [isScrolled, setIsScrolled] = useState(false)

  window.onscroll=() => {
    setIsScrolled(window.scrollY === 0 ? false : true);
    return () => (window.onscroll = null);

  }
  return (
    <div className={isScrolled ? "navbar scrolled" : "navbar"}>
      <div className="container">
        <div className="left">
          <img src='../../assets/netflix-3.svg' alt='Logo'/>
          <span>Homepage</span>
          <span>Series</span>
          <span>Movies</span>
          <span>New and Popular</span>
          <span>Series</span>
        </div>
        <div className="right">
          <Search className='icons'/>
          <span>KID</span>
          <Notifications className='icons'/>
          <img src="../../assets/profilepic.webp" alt="" />
          <div className="profile">
            <ArrowDropDown className='icons'/>
            <div className="options">
              <span>Settings</span>
              <span>Log Out</span>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default Navbar
