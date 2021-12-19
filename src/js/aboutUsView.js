import Logo from '../images/logo.png';
import '../css/aboutUs.css';

function AboutUs(props) {
    return (
        <div className='picture'>
            <div id="pic">
                <img src={Logo} alt ="Highlight Kings"/>
            </div>
            <h1 className="aboutUs-content">
                About us</h1>

            <div type='text' className='infoText'>This website is a project done by Ville Vik, Carl Johan Jonsson, Nima Nayeri and Daniel Chouster as part of the DH2642 course at KTH Royale Institute of Technology.
                <br></br><br></br>Feel free to contact team leader Ville Vik at <a href="mailto:vvik@kth.se">vvik@kth.se</a> for feedback or business inquiries.

            </div>
        </div>
 
    )
}

export default AboutUs;
  