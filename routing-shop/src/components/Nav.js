import '../stylesheets/Nav.css';
import { Link } from 'react-router-dom';


function Nav() {

     const linkStyle = {
         color: 'white'
     }

    return (
        <nav>
            <h3>Logo</h3>
            <ul className='nav-links'>
                <Link style={linkStyle}  to="/about">
                    <li className='nav-link'>About</li>
                </Link>

                <Link style={linkStyle} to="/shop">
                    <li className='nav-link'>Shop</li>
                </Link>
            </ul>
        </nav>
    )
}


export default Nav;