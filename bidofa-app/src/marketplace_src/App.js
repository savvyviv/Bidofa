import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from '../marketplace_components/Navbar';
import Categories from '../marketplace_components/Categories';
import Footer from '../marketplace_components/Footer';
//import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
//import routes from '../../config/route';

function Marketplace() {
  return (
    <>
    
    
      
    
        <Navbar />
        <Categories/>
        <Footer />
    </>
  )
}

export default Marketplace;
