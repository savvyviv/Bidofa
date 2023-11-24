import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faXTwitter,
    faFacebook,
    faInstagram
  } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div>
      <div className="footer">
        <div className="row">
            <div className="col-lg-3">
                <h1>BIDOFA</h1>
                <p>An exclusive Hub and Marketplaceto exhibit various Digital assets</p>
            </div>
            <div className="col-lg-3"> 
              <h6>Explore</h6>
              <h6>Help Center</h6>
              <h6>Learn</h6>
              <h6>Become a Partner</h6>
            </div>
            <div className="col-lg-3">
                <h6>Blog</h6>
                <h6>Bidofa token</h6>
                <h6>Suggest feature</h6>
                <h6>Contact us</h6>
            </div>

              <div className="col-lg-3">
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
              <div className="horizontal">
                <hr />
              </div>
              <div className="footer_items">
                <div className="row">
                    <div className="col-lg-3">
                      <div className="copyright">
                        <p>Copyright 2022 Jaja, All rights reserved</p>
                      </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="terms"><p>Terms</p></div>
                       
                    </div>
                    <div className="col-lg-3">
                        <div className="policy"><p>Privacy Policy</p></div>
                        
                    </div>
                </div>
              </div>
            </div>
        </div>
        </div>
        

  )
}

export default Footer
