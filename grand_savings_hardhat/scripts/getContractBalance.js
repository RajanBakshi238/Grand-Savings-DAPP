// for getting the contract balance ...

const { getNamedAccounts, ethers } = require("hardhat");

async function main() {
  const { deployer } = await getNamedAccounts();
  const cryptoKids = await ethers.getContract("CryptoKids", deployer);
  const transactionResponse = await cryptoKids.balanceOf()

//   await transactionResponse.wait(1);
  console.log("Contract Balance", transactionResponse.toString());
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
