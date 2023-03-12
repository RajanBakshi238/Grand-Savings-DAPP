// for adding the kid....

const { getNamedAccounts, ethers } = require("hardhat");

async function main() {
  const { deployer } = await getNamedAccounts();
  const cryptoKids = await ethers.getContract("CryptoKids", deployer);
  const transactionResponse = await cryptoKids.getAllKids();

  //   await transactionResponse.wait(1);
  console.log("Get All Kid - ", transactionResponse);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
