import agenda1 from '../icons/agenda1.png';
import agenda2 from '../icons/agenda2.png';
export default function Agenda() {
    const items = [
                    {time:'17:00', text:'Check in'},
                    {time:'18:00', text:'Opening Ceremony'},
                    {time:'18:30', text:'Workshop: Game Design'},
                    {time:'21:00', text:'Dinner'},
                    {time:'22:00', text:'Game Session'},
                    {time:'23:00', text:'Start Developing'}
            ]
     return(
        <div className="agenda">
        <h2 className="section-title">Agenda — Day 1</h2>

        <div className='agenda-main'>
            <img src={agenda1} alt="" />
             
            <div className="agenda-card ornate">
               <div className="agenda-list">
                {items.map((it, i) => (
                <div key={i} className="agenda-item">
                    <div>{it.text}-{it.time}</div>  <br />
                </div>
                ))}
            </div>
            <img src={agenda2} alt="" />
        </div>
        </div>
        <p>See the full Agenda <span>HERE</span></p>
       
    </div>

        
     )
    
}