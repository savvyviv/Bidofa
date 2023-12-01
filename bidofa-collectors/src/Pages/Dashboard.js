import React from 'react';
import './Dashboard.css';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  return (
    <>
      <div className="logo">
          <ul>
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
    </>
  )
}

export default Dashboard
