import './Hero.scss'
import bg from '../../assets/BG Image.png'
import { Link } from 'react-scroll'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCirclePlay } from '@fortawesome/free-regular-svg-icons'



const Hero = () => {
    return (
        <div className='hero-page'>
            <img src={bg} alt='background' />

            <div className='text-and-button'>
                <h2>Hello,<br />Welcome to<br />CogniSaksham!</h2>
                <Link
                    className='learn-about-us-button'
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    to="learn-about-us"
                >
                    Learn about us
                </Link>

                <a href='/'>
                    <FontAwesomeIcon icon={faCirclePlay} style={{ color: "#ffffff", }} /> Play Video
                </a>
            </div>
        </div>
    )
}

export default Hero;