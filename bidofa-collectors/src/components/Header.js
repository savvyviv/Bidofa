import React from 'react';
import './Header.css';

import { Sidebar, Menu, MenuItem, useProSidebar } from "react-pro-sidebar";
import { MdOutlineSpaceDashboard } from "react-icons/md";
import { AiOutlineFire } from "react-icons/ai";
import { IoImageOutline } from "react-icons/io5";
import { FiSettings } from "react-icons/fi";
import { AiOutlineLogout } from "react-icons/ai";
import { CgMenu } from "react-icons/cg";
import { Routes, Route, Link } from "react-router-dom";

import Bids from '../Pages/Bids';
import Collection from '../Pages/Collections';
import Settings from '../Pages/Settings';
import Dashboard from '../Pages/Dashboard';


import Label from './images/label.png';


const Header = () => {
  const { collapseSidebar } = useProSidebar();


  return (
    <div style={{ display: 'flex', height: '100vh'}}>
      <Sidebar className="dashboard">
        <Menu>
            <MenuItem 
              component={<Link to="/" className="link" />}
              icon={<CgMenu
                onClick={() => {
                  collapseSidebar();
                }}
                />
              }
              className='menu1'>
                <h2>BIDOFA</h2>
            </MenuItem>
            <MenuItem className="link1"
              component={<Link to='/dashboard' className='link'/>}
              icon={< MdOutlineSpaceDashboard/>}>Dashboard</MenuItem>
            <MenuItem className="link1"
              component={<Link to='/bids' className='link'/>}
              icon={<AiOutlineFire/>}>Active Bids</MenuItem>
            <MenuItem className="link1"
              component={<Link to='/collection' className='link'/>}
              icon={<IoImageOutline/>}>Collection</MenuItem>
            <MenuItem className="link1"
              component={<Link to='/settings' className='link'/>}
              icon={<FiSettings/>}>Settings</MenuItem>
            
            <img src={Label} alt='label' className='img'/>
            <MenuItem className="link1"
              icon={<AiOutlineLogout/>}>Logout</MenuItem>
        </Menu>
      </Sidebar>
      <section>
        <Routes>
          <Route path='/bids' element={<Bids />}/>
          <Route path='/Collection' element={<Collection />}/>
          <Route path='/settings' element={<Settings />}/>
          <Route path='/dashboard' element={<Dashboard />}/>
        </Routes>
      </section>
    </div>
  )
}

export default Header
