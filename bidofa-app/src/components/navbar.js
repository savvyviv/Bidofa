import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../assets/navbar.css';
import Logo from "../images/logo.png"


function Navbar() {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMobilemenu = () => setClick(false);


    return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
           <Link to="/" className='navbar-logo' onClick={closeMobilemenu}>
                <img src={Logo} alt="Logo" />
           </Link>

           <div className='menu-icon' onClick={handleClick}>
                <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
           </div>

           <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                <li className='nav-item'>
                    <Link to='/' className='nav-links' onClick={closeMobilemenu}>
                       Marketplace
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to='/' className='nav-links' onClick={closeMobilemenu}>
                        Learn
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to='/' className='nav-links' onClick={closeMobilemenu}>
                        FAQs
                    </Link>
                </li>
                <div className='navbar-user'>
                    <li className='usrs'>
                        <Link to="/" onClick={closeMobilemenu}>
                            <span className="btn-grad" role="button">Connect Wallet</span>
                        </Link>
                    </li>
                    <li className='usrs'>
                        <Link to="/" onClick={closeMobilemenu}>
                            <span className="btn-grad2" role="button">Contact</span>
                        </Link>
                    </li>
                </div>
           </ul>
        </div>
      </nav>
    </>
  )
}

export default Navbar
