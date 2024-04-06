import { ArrowBackIosOutlined, ArrowForwardIosOutlined } from '@mui/icons-material'
import './list.scss'
import ListItem from '../listItem/ListItem'
import { useRef, useState } from 'react'

const List = () => {
    const [slideNumber, setSlideNumber] = useState(0)

    const listRef = useRef();

    const handleClick = (direction) => {
      let distance = listRef.current.getBoundingClientRect().x - 50
      
      if (direction === "left" && slideNumber > 0) {
        setSlideNumber(slideNumber - 1)
        listRef.current.style.transform = `translate(${230 + distance}px)`
      }
      if (direction === "right" && slideNumber < 5) {
        setSlideNumber(slideNumber + 1)
        listRef.current.style.transform = `translate(${-230 + distance}px)`
      }
      console.log(distance)
    }
  return (
    <div className='list'>
      <span className="listTitle">Continue to watch</span>
      <div className="wrapper">
        <ArrowBackIosOutlined className='sliderArrow left' onClick={()=>handleClick("left")}/>
        <div className="container"  ref={listRef}>
          <ListItem/>
          <ListItem/>
          <ListItem/>
          <ListItem/>
          <ListItem/>
          <ListItem/>
          <ListItem/>
          <ListItem/>
          <ListItem/>
          <ListItem/>
        </div>
        <ArrowForwardIosOutlined className='sliderArrow right' onClick={()=>handleClick("right")}/>
      </div>
    </div>
  )
}

export default List
