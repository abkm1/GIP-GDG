
import eventlogo from "../assets/eventlogo.png"

export default function Header() {
    
  return (
    <header >
        <img src={eventlogo} alt=""  />
       <nav>
         <a href="#">Home</a>
         <a href="#about">About</a>
         <a href="#agenda">Agenda</a>
        <a href="#contact">Contact</a>
       </nav>
       <button>Register</button> 
    </header>
    )

}