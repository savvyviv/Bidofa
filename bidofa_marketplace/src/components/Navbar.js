import React from 'react';
import './Navbar.css';

function Navbar() {

  return (
      <>
      <div class="super_container">
        <header>
            
            <nav classsName="navbar">
                <div className="main_nav" >
                  <div relative w-full h-screen mx-auto>
                    <ul class="main_nav_list">
                        <li className="main_nav_item">BIDOFA</li>
                        <li class="main_nav_item">Marketplace</li>
                        <li class="main_nav_item">Learn</li>
                        <li class="main_nav_item">"FAQs</li>
                        <li className="main_nav_item"><button className="button2">Connect Wallet</button></li>
                        <li className="main_nav_item"><button className="button1">Contact</button></li>
                    </ul>
                  </div>
                </div>
            </nav>
            <div className="header_title">
                <h1>Marketplace</h1>
            </div>
        </header>
      </div>
      
    </>
  )
}

export default Navbar
