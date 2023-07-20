require("@nomicfoundation/hardhat-toolbox");
require('dotenv').config()

const INFURA_API_KEY = process.env.INFURA_API_KEY
const ALCHEMY_API_KEY = process.env.ALCHEMY_API_KEY

console.log(`INFURA_API_KEY=${INFURA_API_KEY}`);
console.log(`ALCHEMY_API_KEY=${ALCHEMY_API_KEY}`);

task("getTokenURI")
  .addParam("contract")
  .addParam("tokenid")
  .setAction(async (taskArgs) => {
    const Token = await ethers.getContractFactory("AnxioCrew");
    const TokenConnected = await Token.attach(taskArgs.contract);

    const uri = await TokenConnected.tokenURI(taskArgs.tokenid);
    console.log(`URI is: ${uri}`);
});

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.18",
  networks: {
        iRinkeby: {
            url: `https://rinkeby.infura.io/v3/${INFURA_API_KEY}`,
        },
        iGoerli: {
            url: `https://goerli.infura.io/v3/${INFURA_API_KEY}`,
        },
        iSepolia: {
            url: `https://sepolia.infura.io/v3/${INFURA_API_KEY}`,
        },
        iAvalanche: {
            url: `https://avalanche-mainnet.infura.io/v3/${INFURA_API_KEY}`,
        },
        aGoerli: {
            url: `https://eth-goerli.g.alchemy.com/v2/${ALCHEMY_API_KEY}`,
        },
        aOptimismGoerli: {
            url: `https://opt-goerli.g.alchemy.com/v2/${ALCHEMY_API_KEY}`,
        },
  },
};
