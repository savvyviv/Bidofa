import React from 'react';
import '../assets/Footer.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faXTwitter,
    faFacebook,
    faInstagram
  } from "@fortawesome/free-brands-svg-icons";

function Footer () {
  return (
    <div>
      <div className="footer-section">
        <div className="row">
          <div className="col-md-4 col-xs-12">
            <h1 className='bodofa-text'>BIDOFA</h1>
            <h5>An exclusive Hub and Marketplace
            <br />to exhibit various Digital assets</h5>
          </div>
          <div className='col-sm-8 col-xs-12'>
            <div className='row'>
              <div className="col-sm-4"> 
                <h6>Explore</h6>
                <h6>Help Center</h6>
                <h6>Learn</h6>
                <h6>Become a Partner</h6>
              </div>
              <div className="col-sm-4">
                <h6>Blog</h6>
                <h6>Bidofa token</h6>
                <h6>Suggest feature</h6>
                <h6>Contact us</h6>
              </div>

              <div className="col-sm-4">
                <h6>Follow us on</h6>
                <a href="https://www.facbook.com/c/jamesqquick" className="youtube_social">
                  <FontAwesomeIcon icon={faFacebook} size="2px"/>
                </a>
                <a href="https://www.instagram.com/learnbuildteach"
                  className="instagram social">
                  <FontAwesomeIcon icon={faInstagram} size="2px" />
                </a>
                <a href="https://www.twitter.com/jamesqquick" className="twitter social">
                  <FontAwesomeIcon icon={faXTwitter} size="2px" />
                </a>
              </div>
            </div>
          </div>
          <div className="horizontal">
            <hr />
          </div>
          <div className="footer_items">
            <div className="row">
              <div className="col-sm-4 col-xs-12">
                <div className="copyright">
                  <h6>Copyright 2022 Jaja, All rights reserved</h6>
                </div>
              </div>
              <div className="col-sm-4 col-xs-12">
                <div className="terms"><h6>Terms</h6></div>
              </div>
              <div className="col-sm-4 col-xs-12">
                <div className="policy"><h6>Privacy Policy</h6></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
        

  );
};

export default Footer;
