// for adding the kid....

const { getNamedAccounts, ethers } = require("hardhat");

async function main() {
  const { deployer } = await getNamedAccounts();
  const cryptoKids = await ethers.getContract("CryptoKids", deployer);
  const transactionResponse = await cryptoKids.addKid(
    "0x3C44CdDdB6a900fa2b585dd299e03d12FA4293BC",
    "Sandeep",
    "Thakur",
    "1678605951",
    // ethers.utils.parseEther("1"),
    1,
    false
  );

  await transactionResponse.wait(1);
  console.log("Kid Added");
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });








  // "0x70997970C51812dc3A010C7d01b50e0d17dc79C8",
  //   "Varun",
  //   "Bakshi",
  //   "1678605951",
  //   // ethers.utils.parseEther("1"),
  //   1,
  //   false