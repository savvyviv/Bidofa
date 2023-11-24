import React from 'react';
import './Navbar.css';

function Navbar() {

  return (
      <>
      <div class="super_container">
        <header>
            <div class="header_content">
                <ul className="main_nav">
                  <li className="main_nav_header"></li>
                </ul>
            </div>
            
            <nav classsName="navbar">
                <div className="main_nav">
                    <ul class="main_nav_list">
                        <li className="main_nav_item">BIDOFA</li>
                        <li class="main_nav_item">Marketplace</li>
                        <li class="main_nav_item">Learn</li>
                        <li class="main_nav_item">"FAQs</li>
                        <li className="main_nav_item"><button className="button2">Connect Wallet</button></li>
                        <li className="main_nav_item"><button className="button1">Contact</button></li>
                    </ul>
                </div>
            </nav>
            <div className="header_title">
                <h1>Marketplace</h1>
            </div>
        </header>
        
        <div className="btn_group">
          <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
            All Categories
          </button>
          <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
            All items
          </button>
        </div>
      </div>
      
    </>
  )
}

export default Navbar
