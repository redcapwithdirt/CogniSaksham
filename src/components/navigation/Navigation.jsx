import './Navigation.scss';
import { Link } from 'react-scroll';
import Logo from '../../assets/logo.png'
import { Fragment } from 'react';

const Navigation = () => {
    return (
        <Fragment>
            <nav className='nav-bar'>

                <Link
                    activeClass="active"
                    className="logo-container"

                    to="home"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                >
                    <button>
                        <img src={Logo} alt="logo" />
                    </button>
                </Link>

                <div className='nav-container'>
                    <Link
                        activeClass="active"
                        className="nav-link"

                        to="home"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                    >
                        Home
                    </Link>

                    <Link
                        activeClass="active"
                        className="nav-link"

                        to="learn-about-us"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                    >
                        Learn about us
                    </Link>

                    <Link
                        activeClass="active"
                        className="nav-link"

                        to="exercises"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                    >
                        Exercises
                    </Link>

                    <Link
                        activeClass="active"
                        className="nav-link"

                        to="the-team"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                    >
                        The Team
                    </Link>


                </div>

                <button className='login-signup'>
                    Login/Sign Up
                </button>

            </nav>
        </Fragment>
    )
}

export default Navigation;