import insta from "../icons/insta.png"
import linkedin from "../icons/linked.png"
import google from "../icons/google.png"
import face from "../icons/face.png"
import innorobot from '../assets/innorobot.png';
export default function Contact() {

    return(
        <div className="contact">
            <h2>ANY QUESTIONS?</h2>
            <p>QUESTIONS ECHO IN THE SHADOWS? <br />
               THE GDG TEAM IS HERE TO GUIDE YOU — REACH OUT ANYTIME 
            </p>
            <div className="social-media">
                <a href="#"><img src={face} alt="" className="icons social-icons"/></a>
                 <a href="#"><img src={insta} alt=""  className="icons social-icons"/></a>
                  <a href="#"><img src={linkedin} alt=""  className="icons social-icons"/></a>
                   <a href="#"><img src={google} alt="" className="icons social-icons" /></a>
            </div>
            <div className="innorobot">
                    <img src={innorobot} alt="" />
            </div>

            <p> <strong>© 2025 GDG Algiers. All rights reserved.</strong></p>
            <img src="" alt="" />
        </div>
    )
}
