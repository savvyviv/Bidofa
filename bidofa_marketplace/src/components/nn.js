import React from 'react';
import './Navbar.css';

function Navbar() {

  return (
      <>
        <div class="super_container">
          <header class="header" >
            <div class="header_content" >
                <div class="title">
                  <span>BIDOFA</span>
                </div>
            </div>
            
            <nav classsName="navbar">
                <div className="main_nav">
                    <ul class="main_nav_list">
                        <li className="main_nav_item">BIDOFA</li>
                        <li class="main_nav_item"><a href="/">Marketplace</a></li>
                        <li class="main_nav_item"><a href="/">Learn</a></li>
                        <li class="main_nav_item"><a href="/">FAQs</a></li>
                        <li className="main_nav_item"><button className="button2"><a href="/">Connect Wallet</a></button></li>
                        <li className="main_nav_item"><button className="button1"><a href="/">Contact</a></button></li>
                    </ul>
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
