import React from 'react';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import Home from './components/LandingPage.js';
import './App.css';
import Marketplace from './marketplace_src/App.js';
import routes from './config/routes.js';

function App() {
  return (
    <>
      <Router>
        <div> 
        {routes.map(({ path, component }) => (
          <Routes>
            <Route  key={'home'}  path ="/"  exact Component={Home}>
          
      
        
            </Route>

            <Route key = {'marketplace'} path="/Marketplace" exact Component= {Marketplace}>
      
             </Route>
          </Routes>
          ))}
        </div>
      </Router>
    </>
  )
}

export default App;
