/** @type import('hardhat/config').HardhatUserConfig */
require("hardhat-deploy");

const GOERLI_RPC_URL = "https://eth-goerli.g.alchemy.com/v2/OMIqacr1nhkHZCP3LZmyTh12dAQqy0D5";
const PRIVATE_KEY = "49759754577c8f7559b2e3b72c833f457add16095da100f123f93b6a7f3bc048";
const ETHERSCAN_API_KEY = "GTDEV7ZK82P21CG29M4EZYTAXBP63GIKC7"



module.exports = {
  solidity: "0.8.7",
  defaultNetwork: "hardhat",
  networks: {
    hardhat:{
      blockConfirmations: 10   // just for seeing config is being available in deploy script or not js 
    }
    // goerli: {

    // }
  },
  namedAccounts: {
    deployer: {
      default: 0,
      1: 0,
    },
  },
  blockConfirmations: 10
};
