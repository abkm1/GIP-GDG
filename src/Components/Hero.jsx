
import groupImg from '../icons/group.png'
import locationIcon from '../icons/location.png'
import group12 from '../assets/group12x.png'


export default function Hero(){
    return(
        <div>
            <div>
                    <h2 className="brand-title">InnoGame</h2>
                    <h2 className="brand-tag">Shape The Shadows</h2>
            </div>
            <div className='hero-main'>
                    <div className="hero-left">
                        <div className="meta-line">
                            <div> <img src={locationIcon} alt=""  className="icons-hero"/>
                            <span>ESI ALGIERS</span>
                            <span>•</span>
                            </div>
                           <div> <img src={groupImg} alt=""  className="icons-hero"/>
                            <span>20/11/2025 — 09:00</span></div>
                           
                        </div>
                        <p>
                        IN THE SHADOWS OF CODE, WORLDS ARE BORN <br />
                            CREATE YOURS IN JUST 48 HOURS <br />
                            WILL YOUR GAME RISE FROM THE DARK?
                        </p>
                    </div>
                    <div className="hero-right">
                        <img src={group12} alt="" className='group12' />
                    </div>
            </div>
            
        </div>
    )
}