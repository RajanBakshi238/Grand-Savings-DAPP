// depositing eth to kids balance

const { getNamedAccounts, ethers } = require("hardhat");

async function main() {
    const {deployer} = await getNamedAccounts();
    const cryptoKids = await ethers.getContract("CryptoKids", deployer);
    // const transactionResponse = await cryptoKids.deposit("0x3C44CdDdB6a900fa2b585dd299e03d12FA4293BC", {
    const transactionResponse = await cryptoKids.deposit("0x70997970C51812dc3A010C7d01b50e0d17dc79C8", {
        // value: 1
        value: ethers.utils.parseEther("2"),
    });

    await transactionResponse.wait(1);
    console.log(" Deposit balance - ", transactionResponse)
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
