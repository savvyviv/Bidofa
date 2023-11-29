import React from 'react';
import Navbar from './Navbar';
import Footer from "./Footer";
import "../assets/landingPages.css";
import { Link } from 'react-router-dom';
import HeroImage from "../images/hero image.png";
import Metamask from "../images/metamask.png";
import Exodus from "../images/exodus.png";
import Trustwallet from "../images/trustwallet.png";
import Visacard from "../images/visacard-logo.png";
import Mastercard from "../images/mastercard-logo.png";
import Wallet from "../images/wallet.png";
import Vector from "../images/Vector.png";
import Lucide from "../images/lucide_image.png";
import IconMenu from "../images/gridicons_menus.png";
import Photographer from "../images/photography.png";
import Coatcolor from "../images/coatcolor.png";
import Seethrough from "../images/seethrough.png";
import Worldmotion from "../images/wordemotion.png";
import TrendImg1 from "../images/trendimg-1.png";
import TrendImg2 from "../images/trendimg-2.png";
import TrendImg3 from "../images/trendimg-3.png";
import TrendImg4 from "../images/trendimg-4.png";
import LivestreamImg from "../images/live-stream1.png";
import LivestreamImg2 from "../images/live-stream2.png";
import LivestreamImg3 from "../images/live-stream3.png";
import LivestreamImg4 from "../images/live-stream4.png";
import RobertFox from "../images/Robert-fox.png";
import JennyWilson from "../images/Jenny-wilson.png";
import AlbertFlores from "../images/Albert-flores.png";
import EleanorPena from "../images/Eleanor-pena.png";
import CodyFisher from "../images/Cody-fisher.png";
import FarzahSheriff from "../images/Farzah-sheriff.png";
import JacobJones from "../images/Jacob-jones.png";
import KathrynMurphy from "../images/Kathryn-murphy.png";
import DarrellSteward from "../images/Darrell-steward.png";
import RalphEdwards from "../images/Ralph-edwards.png";
import BlockchanImg from "../images/bockchanImg.png";


function Home() {
    return (
      <>
        <div className='main'>
            <div className="p-5 text-center bg-image hero-background">
                <div className="mask">
                    <Navbar />
                    <div className="align-items-center h-100">
                        <div className='row h-pd'>
                            <div className='col-sm-7 col-xs-12'>
                                <h1 className='hero-font'>
                                    Discover, Buy <br />And Sell  <br /><span className='s-text'>Digital</span> Assets
                                </h1>
                                <p className='hero-p'>The leading marketplace for digital assets for Africa by Africans 
                                <br />ranging from videos, art and photography with seemless means 
                                <br />of transaction
                                </p>
                                <div className='button-container'>
                                    <Link to="/">
                                        <span className="btn-grad btn-width" role="button">Explore</span>
                                    </Link>
                                    <Link to="/">
                                        <span className="btn-grad2 btn-width" role="button">Create</span>
                                    </Link>
                                </div>
                            </div>
                            <div className='col-sm-5 col-xs-12'>
                                <div className='hero-image'>
                                    <img src={HeroImage} alt="Logo" className='hero-img' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='container feature-background'>
                <div className='row'>
                    <div className='col-sm-12 col-xs-12 cryto-bg'>
                        <ul className='cryto-ul'>
                            <li className='cryto-li crypto-text metamask-li'><img src={Metamask} alt="Metamask" className='metamask' /> Metamask</li>
                            <li className='cryto-li crypto-text exodus-li'><img src={Exodus} alt="Exodus" className='exodus' /> EXODUS</li>
                            <li className='cryto-li crypto-text trustwallet-li'><img src={Trustwallet} alt="Trustwallet" /> Trust Wallet</li>
                            
                        </ul>

                        <ul className='cryto-ul'>
                            <li className='cryto-li crypto-text visacard-li'><img src={Visacard} alt="Metamask" className='metamask' /> Metamask</li>
                            <li className='cryto-li crypto-text mastercard-li'><img src={Mastercard} alt="Metamask" className='metamask' /> Metamask</li>
                        </ul>
                    </div>
                </div>

                <div className='row feature-section'>
                    <h3 className='feature-text'>How it works</h3>
                    <div className='col-sm-3 col-xs-12' id='feature-card'>
                        <div className='img-circle'><img src={Wallet} alt='Wallet' width="50" className='circle-img' /></div>
                        <p className='card-p'>Setup your wallet</p>
                        <p className='card-p2'>Sign up into your dashboard using your socials or connect using your crpto wallet</p>
                    </div>
                    <div className='col-sm-3 col-xs-12' id='feature-card'>
                        <div className='img-circle'><img src={Vector} alt='Vector' width="50" className='circle-img' /></div>
                        <p className='card-p'>Create your collection</p>
                        <p className='card-p2'>Create your amazing digital assets to sell and connect with other creators</p>
                    </div>
                    <div className='col-sm-3 col-xs-12' id='feature-card'>
                        <div className='img-circle'><img src={Lucide} alt='Lucide' width="50" className='circle-img' /></div>
                        <p className='card-p'>Add your assets</p>
                        <p className='card-p2'>Upload your latest work of art in photography, videos and artworks</p>
                    </div>
                    <div className='col-sm-3 col-xs-12' id='feature-card'>
                        <div className='img-circle'><img src={IconMenu} alt='IconMenu' width="50" className='circle-img' /></div>
                        <p className='card-p'>List them for sale</p>
                        <p className='card-p2'>Connect with buyers across Africa and receive payment in your local currency</p>
                    </div>
                </div>
                <div className='row feature-section-two'>
                    <h3 className='feature-text'>Trending</h3>
                    <div className='col-sm-3 col-xs-12' id='feature-card-two'>
                        <img src={Photographer} alt='Photographer' className="trend-img" />
                        <p className='trend-p'>Cloudy photography</p>
                        <p className='trend-p'>
                            <img src={TrendImg1} alt='TrendImg1' className='trd-img' />
                            <ul className='trend-ul trend-span'>
                                <li className="trend-li space">
                                Created by <br /><b>John wick</b>
                                </li>
                                <li className="trend-li">
                                Current bid <br /><b>5.83ETH</b>
                                </li>
                            </ul>
                        </p>
                        <p className='trend-p'>
                            <ul className='trend-ul'>
                                <li className="trend-li cryto-li">
                                    <button class="button"><i class="fa fa-lock"></i> Place Bid</button>
                                </li>
                                <li className="trend-li trend-span t-scp">
                                    View History
                                </li>
                            </ul>
                        </p>
                    </div>
                    <div className='col-sm-3 col-xs-12' id='feature-card-two'>
                        <img src={Coatcolor} alt='Coatcolor' className="trend-img" />
                        <p className='trend-p'>Coat of many colors</p>
                        <p className='trend-p'>
                            <img src={TrendImg2} alt='TrendImg2' className='trd-img' />
                            <ul className='trend-ul trend-span'>
                                <li className="trend-li space">
                                Created by <br /><b>Ali Bali</b>
                                </li>
                                <li className="trend-li">
                                Current bid <br /><b>20USDC</b>
                                </li>
                            </ul>
                        </p>
                        <p className='trend-p'>
                            <ul className='trend-ul'>
                                <li className="trend-li cryto-li">
                                    <button class="button"><i class="fa fa-lock"></i> Place Bid</button>
                                </li>
                                <li className="trend-li trend-span t-scp">
                                    View History
                                </li>
                            </ul>
                        </p>
                    </div>
                    <div className='col-sm-3 col-xs-12' id='feature-card-two'>
                        <img src={Seethrough} alt='Seethrough' className="trend-img" />
                        <p className='trend-p'>See through me</p>
                        <p className='trend-p'>
                            <img src={TrendImg3} alt='TrendImg3' className='trd-img' />
                            <ul className='trend-ul trend-span'>
                                <li className="trend-li space-two">
                                Created by <br /><b>Sarah Adams</b>
                                </li>
                                <li className="trend-li">
                                Current bid <br /><b>2.83ETH</b>
                                </li>
                            </ul>
                        </p>
                        <p className='trend-p'>
                            <ul className='trend-ul'>
                                <li className="trend-li cryto-li">
                                    <button class="button"><i class="fa fa-lock"></i> Place Bid</button>
                                </li>
                                <li className="trend-li trend-span t-scp">
                                    View History
                                </li>
                            </ul>
                        </p>
                    </div>
                    <div className='col-sm-3 col-xs-12' id='feature-card-two'>
                        <img src={Worldmotion} alt='Worldmotion' className="trend-img" />
                        <p className='trend-p'>World of emotions</p>
                        <p className='trend-p'>
                            <img src={TrendImg4} alt='TrendImg4' className='trd-img' />
                            <ul className='trend-ul trend-span'>
                                <li className="trend-li space-two">
                                Created by <br /><b>Riskat Fehra</b>
                                </li>
                                <li className="trend-li">
                                Current bid <br /><b>$35.00</b>
                                </li>
                            </ul>
                        </p>
                        <p className='trend-p'>
                            <ul className='trend-ul'>
                                <li className="trend-li cryto-li">
                                    <button class="button"><i class="fa fa-lock"></i> Place Bid</button>
                                </li>
                                <li className="trend-li trend-span t-scp">
                                    View History
                                </li>
                            </ul>
                        </p>
                    </div>
                </div>
                <div className='row feature-section-two'>
                    <h3 className='feature-text'>Live Auction</h3>
                    <div className='col-sm-3 col-xs-12' id='feature-card-two'>
                        <img src={LivestreamImg} alt='LivestreamImg' className="trend-img" />
                        <button class="button3"> 12:15:30 </button>
                        <p className='tdp'>Joy of design</p>
                        <p className='trend-p'>
                            <img src={TrendImg1} alt='TrendImg1' className='trd-img' />
                            <ul className='trend-ul trend-span'>
                                <li className="trend-li space">
                                Created by <br /><b>John wick</b>
                                </li>
                                <li className="trend-li">
                                Current bid <br /><b>5.83ETH</b>
                                </li>
                            </ul>
                        </p>
                        <p className='trend-p'>
                            <ul className='trend-ul'>
                                <li className="trend-li cryto-li">
                                    <button class="button"><i class="fa fa-lock"></i> Place Bid</button>
                                </li>
                                <li className="trend-li trend-span">
                                    <button class="button2">Submit</button>
                                </li>
                            </ul>
                        </p>
                    </div>
                    <div className='col-sm-3 col-xs-12' id='feature-card-two'>
                        <img src={LivestreamImg2} alt='LivestreamImg2' className="trend-img" />
                        <button class="button3"> 12:15:30 </button>
                        <p className='tdp'>Strokes of joy</p>
                        <p className='trend-p'>
                            <img src={TrendImg2} alt='TrendImg2' className='trd-img' />
                            <ul className='trend-ul trend-span'>
                                <li className="trend-li space">
                                Created by <br /><b>Ali Bali</b>
                                </li>
                                <li className="trend-li">
                                Current bid <br /><b>20USDC</b>
                                </li>
                            </ul>
                        </p>
                        <p className='trend-p'>
                            <ul className='trend-ul'>
                                <li className="trend-li cryto-li">
                                    <button class="button"><i class="fa fa-lock"></i> Place Bid</button>
                                </li>
                                <li className="trend-li trend-span">
                                    <button class="button2">Submit</button>
                                </li>
                            </ul>
                        </p>
                    </div>
                    <div className='col-sm-3 col-xs-12' id='feature-card-two'>
                        <img src={LivestreamImg3} alt='LivestreamImg3' className="trend-img" />
                        <button class="button3"> 12:15:30 </button>
                        <p className='tdp'>I love myself</p>
                        <p className='trend-p'>
                            <img src={TrendImg3} alt='TrendImg3' className='trd-img' />
                            <ul className='trend-ul trend-span'>
                                <li className="trend-li space-two">
                                Created by <br /><b>Sarah Adams</b>
                                </li>
                                <li className="trend-li">
                                Current bid <br /><b>2.83ETH</b>
                                </li>
                            </ul>
                        </p>
                        <p className='trend-p'>
                            <ul className='trend-ul'>
                                <li className="trend-li cryto-li">
                                    <button class="button"><i class="fa fa-lock"></i> Place Bid</button>
                                </li>
                                <li className="trend-li trend-span">
                                    <button class="button2">Submit</button>
                                </li>
                            </ul>
                        </p>
                    </div>
                    <div className='col-sm-3 col-xs-12' id='feature-card-two'>
                        <img src={LivestreamImg4} alt='LivestreamImg4' className="trend-img" />
                        <button class="button3"> 12:15:30 </button>
                        <p className='tdp'>Nature’s beauty</p>
                        <p className='trend-p'>
                            <img src={TrendImg4} alt='TrendImg4' className='trd-img' />
                            <ul className='trend-ul trend-span'>
                                <li className="trend-li space-two">
                                Created by <br /><b>Riskat Fehra</b>
                                </li>
                                <li className="trend-li">
                                Current bid <br /><b>$35.00</b>
                                </li>
                            </ul>
                        </p>
                        <p className='trend-p'>
                            <ul className='trend-ul'>
                                <li className="trend-li cryto-li">
                                    <button class="button"><i class="fa fa-lock"></i> Place Bid</button>
                                </li>
                                <li className="trend-li trend-span">
                                    <button class="button2">Submit</button>
                                </li>
                            </ul>
                        </p>
                    </div>
                </div>
                <div className='row feature-section-two'>
                    <h3 className='feature-text'>Top Sellers</h3>
                    <div className='col-xs-12 top-sell'>
                        <ul className='cryto-ul'>
                            <li className='cryto-li top-seller'>
                                <img src={DarrellSteward} alt='DarrellSteward' width="70" className='circle-img img-float' />
                                <span className='spn-text'>Darrell Steward <br />5.83ETH</span>
                            </li>
                            <li className='cryto-li top-seller'>
                                <img src={KathrynMurphy} alt='KathrynMurphy' width="70" className='circle-img img-float' />
                                <span className='spn-text'>Kathryn Murphy <br />25USDC</span>
                            </li>
                            <li className='cryto-li top-seller'>
                                <img src={JacobJones} alt='JacobJones' width="70" className='circle-img img-float' />
                                <span className='spn-text'>Jacob Jones <br />3.5MATIC</span>
                            </li>
                            <li className='cryto-li top-seller'>
                                <img src={FarzahSheriff} alt='FarzahSheriff' width="70" className='circle-img img-float' />
                                <span className='spn-text'>Farzah Sheriff <br />52USDC</span>
                            </li>
                            <li className='cryto-li top-seller'>
                                <img src={CodyFisher} alt='CodyFisher' width="70" className='circle-img img-float' />
                                <span className='spn-text'>Cody Fisher <br />20BITCOIN</span>
                            </li>
                        </ul>
                        <ul className='cryto-ul'>
                            <li className='cryto-li top-seller2'>
                                <img src={EleanorPena} alt='EleanorPena' width="70" className='circle-img img-float' />
                                <span className='spn-text'>Eleanor Pena <br />$100</span>
                            </li>
                            <li className='cryto-li top-seller2'>
                                <img src={AlbertFlores} alt='AlbertFlores' width="70" className='circle-img img-float' />
                                <span className='spn-text'> Albert Flores <br />2.1ETH</span>
                            </li>
                            <li className='cryto-li top-seller2'>
                                <img src={JennyWilson} alt='JennyWilson' width="70" className='circle-img img-float' />
                                <span className='spn-text'>Jenny Wilson <br />$70</span>
                            </li>
                            <li className='cryto-li top-seller2'>
                                <img src={RobertFox} alt='RobertFox' width="70" className='circle-img img-float' />
                                <span className='spn-text'>Robert Fox <br />1.3ETH</span>
                            </li>
                            <li className='cryto-li top-seller2'>
                                <img src={RalphEdwards} alt='RalphEdwards' width="70" className='circle-img img-float' />
                                <span className='spn-text'>Ralph Edwards <br />1.3ETH</span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className='row feature-section-two blockchain-bg'>
                    <div className='col-sm-6 col-xs-12 img-align'>
                        <img src={BlockchanImg} alt='BlockchanImg' />
                    </div>
                    <div className='col-sm-6 col-xs-12 txt-img'>
                        <h3 className='blockchan-text'>Learn about <br />Blockchain</h3>
                        <p className='trend-p'>Start your own Digital assets blog today with our intuitive platform. 
                        <br />Join us and become a part of the Digital revolution.</p>
                    </div>
                </div>
                <div className='row feature-section-two'>
                    <div className='col-sm-12 col-xs-12 join-section'>
                        <h3 className='feature-text'>Join our Community</h3>
                        <p className='newsletter-p'>Meet our Jaja Team, artists and collections for <br />platform updates, announcements and more</p>
                        <button class="button-news">Join us on Discord</button>
                    </div>
                </div>
                <div className='row footer-section'>

                </div>
            </div>
            <Footer />
        </div>
      </>
    );
};

export default Home;
