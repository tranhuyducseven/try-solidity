require("dotenv").config();
const HDWalletProvider = require("@truffle/hdwallet-provider");
const { INFURA_API_KEY, MNEMONIC } = process.env;

module.exports = {
  mocha: {},
  compilers: {
    solc: {
      version: '0.8.15'
    }
  },
  networks: {
    development: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*",
    },
    sepolia: {
      provider: () =>
      new HDWalletProvider({
        mnemonic: {
          phrase: MNEMONIC
        },
        providerOrUrl:  "https://sepolia.infura.io/v3/" + INFURA_API_KEY,
        numberOfAddresses: 1,
        shareNonce: true,
      }),
      network_id: "11155111",
      gas: 4465030,
    },
  },
};