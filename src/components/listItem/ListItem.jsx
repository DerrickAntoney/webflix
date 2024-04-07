import { Add, PlayArrow, ThumbDownOutlined, ThumbUpAltOutlined } from '@mui/icons-material'
import './listItem.scss'
import { useState } from 'react'

const ListItem = ({index}) => {
  const [isHovered, setIsHovered] = useState(false)
  return (
    <div className='listItem'
     style={{left: isHovered && index * 225 - 50 + index * 2.5}}
     onMouseEnter={() => setIsHovered(true)}
     onMouseLeave={() => setIsHovered(false)}
    >
      <img src="../../../assets/cinema.jpg" alt="" />
      {isHovered && (
        <>
          <video src="../../assets/videos/trailer.mp4" autoPlay={true} loop/>
          <div className="itemInfo">
            <div className="icons">
              <PlayArrow className='icon'/>
              <Add className='icon'/>
              <ThumbUpAltOutlined className='icon'/>
              <ThumbDownOutlined className='icon'/>
            </div>
            <div className="itemInfoTop">
              <span className="title">1hour 14mins</span>
              <span className="limit">+21</span>
              <span className="year">1999</span>
            </div>
            <div className="desc">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </div>
            <div className="genre">Action</div>
          </div>
        </>
      )}
      
    </div>
  )
}

export default ListItem
