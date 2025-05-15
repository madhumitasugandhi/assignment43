import ImgHome from './../../assets/home.png'
import { Link } from 'react-router-dom'
import './HomeBtn.css'

function HomeBtn() {
  return (
     <Link to="/">
        <img src={ImgHome} alt="Home" className='img-icon home' />
      </Link>
  );
}

export default HomeBtn;