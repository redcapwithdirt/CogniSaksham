import './Learn-about-us.scss'
import logo from '../../assets/logo.png'


const Learnaboutus = () => {
    return (
        <div className='learn-about-us-container'>
            <h2>learn about us</h2>
            <h1>We are shaping the young<br /> minds of our nation</h1>
            <p>We believe that the future of our nation shall only be bright if the <br/>children of our nation are given an opportunity to shine bright.

                <br /><br/>   All children regardless of abilities deserve a fair and equal <br/>chance at growing and learning, and CogniSaksham wants to do <br/>that by providing Cognitive Retraining Program at home who are<br/> suffering from ailments like Autism Spectrum Disorder (ASD), <br/>Down Syndrome, Attention Deficit Hyperactivity Disorder (ADHD)<br/> and more.</p>
            <a href='/' >Learn more</a>
            <img src={logo} alt='logo' />
        </div>
    )

}

export default Learnaboutus;