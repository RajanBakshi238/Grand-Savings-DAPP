// for random testing scripts

const { getNamedAccounts, ethers } = require("hardhat");

async function main() {
  const { deployer } = await getNamedAccounts();
  const cryptoKids = await ethers.getContract("CryptoKids", deployer);
  const transactionResponse = await cryptoKids.kids(0);

  //   await transactionResponse.wait(1);
  console.log("Get Kid - ", transactionResponse);

  console.log("----------------------------------");

  transactionResponse.forEach((element) => {
    console.log(element);
  });

  console.log("-----------------------------------");

  console.log(transactionResponse.walletAddress, ">>>>>>>>>>>>>wallet address");
  console.log(transactionResponse.firstName, ">>>>>>>>>>>>>wallet address");
  console.log(transactionResponse.lastName, ">>>>>>>>>>>>>wallet address");
  console.log(transactionResponse.releaseTime.toString(), ">>>>>>>>>>>>>wallet address");
  console.log(transactionResponse.amount.toString(), ">>>>>>>>>>>>>wallet address");
  console.log(transactionResponse.canWithdraw, ">>>>>>>>>>>>>wallet address");
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });




//   