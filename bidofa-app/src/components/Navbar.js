import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../assets/navbar.css';
import Logo from "../images/logo.png"


function Navbar() {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMobilemenu = () => setClick(false);

   const [navbarContainer, setNavbar] = useState(false);
    const changeBg = () => {
        if (window.scrollY >= 100) {
            setNavbar(true);
        } else {
            setNavbar (false);
        }
    };
window.addEventListener("scroll", changeBg) 



    let [account, setAccount] = useState("");
    let[isConnected, setIsConnected] = useState(false);

  const{ ethereum } = window;
  const connectMetamask = async () => {
    if (window.ethereum !== "undefined") {
        try {
        const accounts = await ethereum.request({method: "eth_requestAccounts"});
        setAccount(accounts[0]);
        setIsConnected(true);
        }
        catch (error) {
            console.error("Error connecting Metamask:", error);
        }
    }
        else {
            console.warn("Metamask not available"); 
        }
    }

  
  const disconnectMetamask  = () => {
    setAccount("")
    setIsConnected(false);
      }



    return (
    <>
      <nav className='navbar'>
        <div className= {navbarContainer ? "navbarContainer scroll navba-expand-sm fixed-top":
        "navbarContainer navba-expand-sm fixed-top"}>
           <Link to="/" className='navbar-logo' onClick={closeMobilemenu}>
                <img src={Logo} alt="Logo" />
           </Link>

           <div className='menu-icon' onClick={handleClick}>
                <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
           </div>

           <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                <li className='nav-item'>
                    <Link to='/Marketplace' className='nav-links' onClick={closeMobilemenu}>
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
                        <p>{account}</p>
                            {isConnected ? (
                            <span className="btn-grad" role="button"onClick={disconnectMetamask}>Disconnect Wallet</span>
                            ) : (
                            <span className="btn-grad" role="button"onClick={connectMetamask}>Connect Wallet</span>)}

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
