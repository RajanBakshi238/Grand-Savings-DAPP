// withdrawing balance

const { getNamedAccounts, ethers } = require("hardhat");

async function main() {
    const {deployer, player1, player2} = await getNamedAccounts();
    const cryptoKids = await ethers.getContract("CryptoKids", player2);
    console.log(player2, ">>>>>>>>>>Player1")
    const transactionResponse = await cryptoKids.withdraw("0x3C44CdDdB6a900fa2b585dd299e03d12FA4293BC");

    await transactionResponse.wait(1);

    console.log("withdraw Balance : ", transactionResponse);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });


// There is no way to access the return value from non-payable manipulting the state ......to do this event shold be used....
