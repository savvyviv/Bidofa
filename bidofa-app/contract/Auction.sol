// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/utils/math/Math.sol";

//0xc36e84c8b3e91fc827b9822e699007b7492b5f6b

contract Auction {
    // static
    address public owner;
    uint public bidIncrement;
    uint public startBlock;
    uint public endBlock;
   // string public ipfsHash;

    // state
    bool public canceled;
    uint public highestBindingBid;
    address public highestBidder;
    mapping(address => uint256) public fundsByBidder;
    bool ownerHasWithdrawn;

    event LogBid(address bidder, uint bid, address highestBidder, uint highestBid, uint highestBindingBid);
    event LogWithdrawal(address withdrawer, address withdrawalAccount, uint amount);
    event LogCanceled();

    constructor(address _owner, uint _bidIncrement, uint _startBlock, uint _endBlock) {
        require(_startBlock < _endBlock, "Invalid block range");
        require(_startBlock < block.number, "Auction already started");
        require(_owner != address(0), "Invalid owner address");

        owner = _owner;
        bidIncrement = _bidIncrement;
        startBlock = _startBlock;
        endBlock = _endBlock;
        
    }

    function getHighestBid() external view returns (uint) {
        return fundsByBidder[highestBidder];
    }

    function placeBid() external payable onlyAfterStart onlyBeforeEnd onlyNotCanceled onlyNotOwner returns (bool success) {
        require(msg.value > 0, "Bid value must be greater than 0");

        uint newBid = fundsByBidder[msg.sender] + msg.value;

        require(newBid > highestBindingBid, "Bid must be higher than the highest binding bid");

        uint highestBid = fundsByBidder[highestBidder];

        fundsByBidder[msg.sender] = newBid;

        if (newBid <= highestBid) {
            highestBindingBid = min(newBid + bidIncrement, highestBid);
        } else {
            if (msg.sender != highestBidder) {
                highestBidder = msg.sender;
                highestBindingBid = min(newBid, highestBid + bidIncrement);
            }
            highestBid = newBid;
        }

        emit LogBid(msg.sender, newBid, highestBidder, highestBid, highestBindingBid);
        return true;
    }

    function min(uint a, uint b) private pure returns (uint) {
        return a < b ? a : b;
    }

    function cancelAuction() external onlyOwner onlyBeforeEnd onlyNotCanceled returns (bool success) {
        canceled = true;
        emit LogCanceled();
        return true;
    }

    function withdraw() external returns (bool success) {
        address withdrawalAccount;
        uint withdrawalAmount;

        if (canceled) {
            withdrawalAccount = msg.sender;
            withdrawalAmount = fundsByBidder[withdrawalAccount];
        } else {
            if (msg.sender == owner) {
                withdrawalAccount = highestBidder;
                withdrawalAmount = highestBindingBid;
                ownerHasWithdrawn = true;
            } else if (msg.sender == highestBidder) {
                withdrawalAccount = highestBidder;
                withdrawalAmount = ownerHasWithdrawn ? fundsByBidder[highestBidder] : fundsByBidder[highestBidder] - highestBindingBid;
            } else {
                withdrawalAccount = msg.sender;
                withdrawalAmount = fundsByBidder[withdrawalAccount];
            }
        }

        require(withdrawalAmount > 0, "Withdrawal amount must be greater than 0");

        fundsByBidder[withdrawalAccount] -= withdrawalAmount;

        require(payable(msg.sender).send(withdrawalAmount), "Failed to send funds");

        emit LogWithdrawal(msg.sender, withdrawalAccount, withdrawalAmount);

        return true;
    }
      receive() external payable {
        // This function is called when Ether is sent to the contract
        // You can add custom logic here if needed
    }

    modifier onlyOwner() {
        require(msg.sender == owner, "Only owner allowed");
        _;
    }

    modifier onlyNotOwner() {
        require(msg.sender != owner, "Owner not allowed");
        _;
    }

    modifier onlyAfterStart() {
        require(block.number >= startBlock, "Auction has not started yet");
        _;
    }

    modifier onlyBeforeEnd() {
        require(block.number <= endBlock, "Auction has ended");
        _;
    }

    modifier onlyNotCanceled() {
        require(!canceled, "Auction is canceled");
        _;
    }

    modifier onlyEndedOrCanceled() {
        require(block.number >= endBlock || canceled, "Auction is still active");
        _;
    }
}