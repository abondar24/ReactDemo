import '../stylesheets/Header.css';
import troll from '../images/troll-face.png'

export default function Header(){
   return (
     <header className="header">
        <img src={troll} className="header-image"/>
        <h2 className="header-title">Meme generator</h2>
        <h4 className="header-development"> Experimental development</h4>
     </header>
   )
}
