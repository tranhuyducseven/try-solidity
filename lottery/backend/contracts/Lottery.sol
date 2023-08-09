// SPDX-License-Identifier: MIT
pragma solidity ^0.8.15;

contract Lottery {
    // State/Storage
    address public owner;
    address payable[] public players;
    address[] public winners;
    uint public lotteryId;

    constructor() {
        owner = msg.sender;
        lotteryId = 0;
    }

    modifier onlyOwner {
        require(msg.sender == owner);
        _;
    }

    function enter() public payable {
        require(msg.value >= 0.001 ether);
        players.push(payable(msg.sender));
    }

    function getPlayers() public view returns (address payable[] memory) {
        return players;
    }

    function getBalance() public view returns (uint) {
        return address(this).balance;
    }

    function getLotteryId() public view returns (uint) {
        return lotteryId;
    }
    
    function getRandomNumber() public view returns (uint) {
        return uint(keccak256(abi.encodePacked(owner, block.timestamp)));
    }

    function pickWinnner() public onlyOwner {
        uint randomIndex = getRandomNumber() % players.length;
        players[randomIndex].transfer(address(this).balance);
        winners.push(players[randomIndex]);
        lotteryId++;
        players = new address payable[](0);
    }

    function getWinners() public view returns(address[] memory) {
        return winners;
    }
}
