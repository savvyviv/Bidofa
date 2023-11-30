import React from 'react';
import './Bids.css';
import { Link } from 'react-router-dom';

import { IoNotificationsOutline } from "react-icons/io5";
import { CiImageOn } from "react-icons/ci";

import Avatar from '../components/images/John.png';

import Table from './Table';

const Bids = () => {
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
      <div>
        <h3>Bids</h3>
        <div className='sub-header'>
          <p>Welcome Bids Page</p>
          <div className='notification'>
            <IoNotificationsOutline />
            <img src={Avatar} alt='avatar' className='avatar'/>
          </div>
        </div>
        <div className='widgets'>
          <div className='widgets-item'>
            <div className='box box1'>
              <div className='widget-img'>
                <CiImageOn /></div>
              </div>
              
            <div className='widgets-text'>
              <span>
                <h3>24K</h3>
                <p>Artworks</p>
              </span>
              
            </div>
          </div>

          <div className='widgets-item'>
            <div className='box2 box2'>
              <div className='widget-img'>
                <CiImageOn /></div>
              </div>
              
            <div className='widgets-text'>
              <span>
                <h3>82K</h3>
                <p>Auction</p>
              </span>
              
            </div>
          </div>

          <div className='widgets-item'>
            <div className='box3 box3'>
              <div className='widget-img'>
                <CiImageOn /></div>
              </div>
              
            <div className='widgets-text'>
              <span>
                <h3>89</h3>
                <p>Cancelled</p>
              </span>
              
            </div>
          </div>
          
        </div>
      </div>
      <div className='list-container'>
        <div className='list-title'>
          <h3>Active Bids</h3>
          <p>Place a Bid</p>
        </div>
        <Table/>
      </div>
    </>
  )
}

export default Bids
