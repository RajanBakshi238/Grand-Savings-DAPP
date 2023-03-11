const { network } = require("hardhat");

module.exports = async ({getNamedAccounts, deployments}) => {
    const {deploy, log} = deployments;
    const { deployer } = await getNamedAccounts();

    log(network, "Deploying contract waiting for confirmations.....", network.config.blockConfirmations);
    // const fundMe = await  deploy("CryptoKids", {
    //     from: deployer,
    //     args: [],
    //     log: true,
    //     waitConfirmations: network
    // })
}