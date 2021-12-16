require("dotenv").config();
require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-ethers");
require("@nomiclabs/hardhat-etherscan");

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: {
    version: "0.8.3",
    settings: {
      optimizer: {
        enabled: true,
        runs: 10,
      },
    },
  },
  paths: {
    artifacts: "./artifacts",
  },
  networks: {
    hardhat: {
      // forking: {
      //   url: "",
      // },
      chainId: 1337,
    },
    mainnet: {
      url: process.env.ALCHEMY_URL_MAINNET,
      // accounts: [`0x${process.env.PRIVATE_KEY_MAINNET}`],
    },
    // rinkeby: {
    //   url: process.env.ALCHEMY_URL_RINKEBY,
    //   accounts: [`0x${process.env.PRIVATE_KEY_DEV}`],
    // },
  },
  etherscan: {
    // Your API key for Etherscan
    // Obtain one at https://etherscan.io/
    apiKey: "",
  },
  dependencyCompiler: {
    paths: [],
  },
};
