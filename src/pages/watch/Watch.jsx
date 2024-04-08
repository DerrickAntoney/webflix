import { ArrowBackOutlined } from '@mui/icons-material'
import './watch.scss'

const Watch = () => {
  return (
    <div className='watch'>
        <div className="back">
            <ArrowBackOutlined/>
            Home
        </div>
        <video className='video' autoplay controls progress src="../../../assets/videos/trailer.mp4"/>
    </div>
  )
}

export default Watch