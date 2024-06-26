import { InfoOutlined, PlayArrow } from '@mui/icons-material'
import './featured.scss'

const Featured = ({type}) => {
  return (
    <div className='featured'>
      {type && (
        <div className="category">
          <span>{type === "movie" ? "Movie" : "Series"}</span>
          <select name='genre' id='genre'>
            <option value="">Genre</option>
            <option value="adventure">Adventure</option>
            <option value="comedy">Comedy</option>
            <option value="crime">Crime</option>
            <option value="fantasy">Fantasy</option>
            <option value="historical">Historical</option>
            <option value="horror">Horror</option>
            <option value="romance">Romance</option>
            <option value="sci-fi">Sci-fi</option>
            <option value="thriller">Thriller</option>
            <option value="animation">Animation</option>
            <option value="drama">Drama</option>
            <option value="documentary">Documentary</option>
          </select>
        </div>
      )}
      <img src='../../assets/profilepic.webp' alt='featured'/>
      <div className="info">
        <img src='../../assets/the-matrix-logo.png' alt='info'/> 
        <span className='desc'>
          Exciting movies today! Thiller, Horror, Drama, Comedy and so much more.
          Exciting movies today! Thiller, Horror, Drama, Comedy and so much more.
          Exciting movies today! Thiller, Horror, Drama, Comedy and so much more.
        </span>
        <div className="buttons">
        <button className="play">
          <PlayArrow/>
          <span>Play</span>
        </button>
        <button className="more">
          <InfoOutlined/>
          <span>Info</span>
        </button>
      </div>
      </div>
    </div>
  )
}

export default Featured
