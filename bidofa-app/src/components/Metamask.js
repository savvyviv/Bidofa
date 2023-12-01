import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Metamask() {
    const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobilemenu = () => setClick(false);




  let[account, setAccount] = useState("");
  let[isConnected, setIsConnected] = useState(false);

  let [contractData, setContractData] = useState("");
  const [fetchcontractData] = useState("")
 
  useEffect(() => {
    // Your initialization logic when the component mounts

    // Example: Connect wallet when the component mounts
    connectMetamask();

    
  }, []); // The empty dependency array ensures this runs only once when the component mounts

  const connectMetamask = async () => {
    const { ethereum } = window;

    if (ethereum && ethereum.request) {
      try {
        const account= await ethereum.request({ method: "eth_requestAccounts" });
        setAccount(account[0]);
        setIsConnected(true);

        // Example: Fetch contract data after connecting
        //const fetchContractData = await fetchContractData();
        //setContractData(fetchContractData);
      } catch (error) {
        console.error("Error connecting Metamask:", error);
      }
    } else {
      console.warn("Metamask not available");
    }
  };

  const disconnectMetamask = async () => {
    const {ethereum} = window
    // Reset state variables
    setAccount(account[0]);
    setIsConnected(false);
    //setContractData("");

  
    // Replace this with your actual contract data fetching logic
    //return "Example Contract Data";
 // };

  return (
    <>
    <div className='navbar-user'>
     <li className='usrs'>
        <Link to="/" onClick={closeMobilemenu}>
         <p>{account}</p>

            {isConnected ? (
            <span className="btn-grad" role="button" onClick={disconnectMetamask}>Disconnect </span>
             ) : (
            <span className="btn-grad" role="button" onClick={connectMetamask}>Connect Wallet</span>
         )}
         </Link>
        </li>
        
    <li className='usrs'>
        <Link to="/" onClick={closeMobilemenu}>
             <span className="btn-grad2" role="button">Contact</span>
         </Link>
    </li>
    </div>
  
    
    </>
     )
      
    } 
}  

export default Metamask;