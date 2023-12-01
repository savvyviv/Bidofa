// Import components
import Marketplace from '../marketplace_src/App'
import Home from '../components/LandingPage.js';
//import MarketplaceComponent from './MarketplaceComponent';
//import SellComponent from './SellComponent';
//import BuyComponent from './BuyComponent';
//import TeamComponent from './TeamComponent';
//import FaqComponent from './FaqComponent';
//import RoadmapComponent from './RoadmapComponent';

// Define routes and associate components

const routes = [{
  home: {
    path: '/',
    component: Home,
  },
  marketplace: {
    path: '/Marketplace',
    component: Marketplace,
  },
  
  /* sell: {
    path: '/marketplace/sell',
    component: SellComponent,
  },
  buy: {
    path: '/marketplace/buy',
    component: BuyComponent,
  },
  team: {
    path: '/team',
    component: TeamComponent,
  },
  faq: {
    path: '/faq',
    component: FaqComponent,
  },
  roadmap: {
    path: '/roadmap',
    component: RoadmapComponent,
  },
*/
}];

// Export routes
export default routes;