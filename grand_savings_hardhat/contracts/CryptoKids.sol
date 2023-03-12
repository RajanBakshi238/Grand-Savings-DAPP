// SPDX-License-Identifier: Unlicensed

pragma solidity ^0.8.7;

contract CryptoKids {
    // owner DAD
    address owner;

    // event defined
    event LogKidFundingReceived(
        address addr,
        uint amount,
        uint contractBalance
    );

    constructor() {
        owner = msg.sender;
    }

    // define KID
    struct Kid {
        address payable walletAddress;
        string firstName;
        string lastName;
        uint releaseTime;
        uint amount;
        bool canWithdraw;
    }

    Kid[] public kids;

    modifier onlyOwner() {
        require(msg.sender == owner, "Only the owner can add kids");
        _;
    }

    // add kid to contract
    function addKid(
        address payable walletAddress,
        string memory firstName,
        string memory lastName,
        uint releaseTime,
        uint amount,
        bool canWithdraw
    ) public onlyOwner {
        kids.push(
            Kid(
                walletAddress,
                firstName,
                lastName,
                releaseTime,
                amount,
                canWithdraw
            )
        );
    }

    function balanceOf() public view returns (uint) {
        return address(this).balance; // Herethis refer to the current contrcat
    }

    // deposit funds to contract, specially to a kid's account
    function deposit(address walletAddress) public payable {
        addToKidsBalance(walletAddress);
    }

    function addToKidsBalance(address walletAddress) private {
        for (uint i = 0; i < kids.length; i++) {
            if (kids[i].walletAddress == walletAddress) {
                kids[i].amount += msg.value;
                emit LogKidFundingReceived(
                    walletAddress,
                    msg.value,
                    balanceOf()
                );
            }
        }
        // recomended not to use loop if data is more as it is not gas efficient
    }

    function getIndex(address walletAddress) private view returns (uint) {
        for (uint i = 0; i < kids.length; i++) {
            if (kids[i].walletAddress == walletAddress) {
                return i;
            }
        }
        return 999; // not a good solution but quick fix
    }

    // kid checks if able to withdraw
    function availableToWithdraw(address walletAddress) public returns (bool) {
        uint i = getIndex(walletAddress);

        require(
            block.timestamp > kids[i].releaseTime,
            "You cannot withdraw yet."
        );

        // if its a time in with in next 15 minute before or after 15 minutes then no use this---> here timestamp is long so manipulation will not effect.
        if (block.timestamp > kids[i].releaseTime) {
            kids[i].canWithdraw = true;
            return true;
        } else {
            return false;
        }
    }

    // withdraw money
    function withdraw(address payable walletAddress) public payable {
        uint i = getIndex(walletAddress);
        require(
            msg.sender == kids[i].walletAddress,
            "You must be the kid to withdraw"
        );
        require(
            kids[i].canWithdraw == true,
            "You are not able to withdraw at this time"
        );
        kids[i].walletAddress.transfer(kids[i].amount);
    }

    function getAllKids() public view returns(Kid[] memory){
        return kids;
    }

}

// NOTES :
// msg is a global variable

// epochconverter.com

// learn x in y solidity.
