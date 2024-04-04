import { ArrowDropDown, Notifications, Search } from '@mui/icons-material'
import './navbar.scss'

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="container">
        <div className="left">
          <img src='../../assets/netflix-3.svg' alt='Logo'/>
          <span>Homepage</span>
          <span>Series</span>
          <span>Moviesies</span>
          <span>New and Popular</span>
          <span>Series</span>
        </div>
        <div className="right">
          <Search className='icon'/>
          <span>KID</span>
          <Notifications className='icon'/>
          <img src="../../assets/profilepic.webp" alt="" />
          <ArrowDropDown className='icon'/>
        </div>
      </div>
    </div>
  )
}

export default Navbar
