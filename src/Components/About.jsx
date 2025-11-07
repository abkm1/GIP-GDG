import innorobot from '../icons/innorobo.png';

import eventlogo from "../assets/eventlogo.png"
import  gdglogo from "../assets/gdglogo.png"
import deco1 from '../icons/deco1.png'
import deco2 from '../icons/deco2.png'
export default function About() {

    return (
        <div className="about">
            <div className='about-head'>
                <img src={innorobot} alt="" className='icons'/>
                <h2 className="section-title">What is InnoGame?</h2>
            </div>

            <p>
                <span>INNOGAME</span> IS A GAME DEVELOPMENT HACKATHON ORGANIZED BY THE <span>GDG ALGIERS</span>. <br />
                HOSTED AT ESI ALGER ON NOVEMBER 20TH, 2025, THIS EDITION DRAWS ITS THEME AND <br /> 
                ATMOSPHERE FROM THE WORLD OF <span>HOLLOW KNIGHT: SILKSONG</span>, INSPIRING PARTICIPANTS TO <br />
                CRAFT GAMES FILLED WITH DEPTH, ARTISTRY, AND CHALLENGE. <br />
                OVER 48 HOURS, TEAMS WILL DESIGN, BUILD, AND REFINE UNIQUE GAMING EXPERIENCES, TACKLING REAL-WORLD DEVELOPMENT AND UI/UX CHALLENGES UNDER THE GUIDANCE OF  <br />
                MENTORS.
            </p>

            <div className='about-logos'>
                <div>
                   <img src={eventlogo} alt="" className='logo' />
                </div>
                <div>
                  <img src={gdglogo} alt="" className='logo' />
                </div>
            </div>

            <div className='about-regester'>
                <img src={deco1} alt="" />
                <button>REGESTER NOW</button>
                <img src={deco2} alt="" />
            </div>
        </div>
    )
}