// checking balance is avaialble to withdraw or not

const { getNamedAccounts, ethers } = require("hardhat");

async function main() {
    const {deployer} = await getNamedAccounts();
    const cryptoKids = await ethers.getContract("CryptoKids", deployer);
    const transactionResponse = await cryptoKids.availableToWithdraw("0x3C44CdDdB6a900fa2b585dd299e03d12FA4293BC");

    console.log("Withdrawable: ", transactionResponse.value)
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });


// There is no way to access the return value from non-payable manipulting the state ......to do this event shold be used....
