require("@nomicfoundation/hardhat-verify");
require("@nomiclabs/hardhat-ethers");
require("dotenv").config();

const KEY = process.env.PRIVATE_KEY;
const RPC = process.env.ALCHEMY_RPC_URL;

module.exports = {
  solidity: "0.8.19",
  networks: {
    sepolia: {
      url: RPC,
      accounts: [KEY],
    },
  },
  etherscan: {
    apiKey: {
      sepolia: "7VA6NH81J25H7M25I4MHPRY7RWXMI1RWYZ",
    },
  },
};
