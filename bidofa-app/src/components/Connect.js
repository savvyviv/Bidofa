import { useState } from "react";
function Connect() {

  
let [account, setAccount] = useState("");
  //let [contractData, setContractData] = useState("");
  


  co  nst { ethereum } = window;
  const connectMetamask = async () => {
    if (window.ethereum !== "undefined") {
        const accounts = await ethereum.request({method: "eth_requestAccounts"});
        setAccount(accounts[0]);
    }
  }

  const connectContract = async () => {
    return;
  }
  const getData = async () => {
    return;
  }
  const changeData = async () => {
    return;
  }
  return (
    <div> className='navbar-user'>
                      <li className='usrs'>
                          <Link to="/" onClick={connectMetamask}>
                              <p>{account}</p>  
                              {isConnected ? (
                              <span className="btn-grad" role="button">Connected</span>
                                  ) : (
                              <span className="btn-grad" role="button">Connect Wallet</span>)}
                          </Link>
                      </li>
    {/*<div className="Connect">
          <button onClick={connectMetamask}>CONNECT TO METAMASK</button>
          <p>{account}</p>
          <button onClick={connectContract}>CONNECT TO CONTRACT</button>
          <button onClick={changeData}>CHANGE DATA</button>
          <button onClick={getData}>READ FROM CONTRACT</button>
                                  <p>{contractData}</p>*/}
    </div>
  );
}

export default Connect;