import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import Logo from "./asset/logo.png";



function Navbar()  {


  return (
    <>
    <div className="header">
      <div className="navbar">
        <div className="logo">
          <ul>
          <li className="list"><img className="logo_img" src={Logo} alt="logo"/></li>
          <li className="list"><Link to="/" className="list-item">Marketplace</Link></li>
          <li className="list"><Link to="/" className="list-item">Learn</Link></li>
          <li className="list"><Link to="/" className="list-item">FAQs</Link></li>
          <li className="list">
            <Link to="/" className="action_btn">Connect Wallet</Link>
          </li>
          <li className="list">
          <Link to="/" className="action_btn1">Contact</Link>
          <div className="toggle_btn">
            <i className="fa-solid fa-bars"></i>
          </div>
          </li>
          </ul>
        </div>
        <div className="dropdown_menu">
        <li className="menu_item"><Link to="/" className="menu_items">Marketplace</Link></li>
          <li className="menu_item" ><Link to="/" className="menu_items">Learn</Link></li>
          <li className="menu_item"><Link to="/" className="menu_items" >FAQs</Link></li>
          <li className="menu_item"><Link to="/" className="menu_items">Connect Wallet</Link></li>
          <li className="menu_item"><Link to="/" className="menu_items">Contact</Link></li>
      </div>
        <div className="marketplace">Marketplace</div>
      </div>
    </div>


    </>
  )
}

export default Navbar
