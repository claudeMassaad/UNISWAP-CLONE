require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.9",
  networks: {
    goerli: {
      url: "https://eth-goerli.g.alchemy.com/v2/9d1-8UgjmMEV9M8y-K0PZdMVUOrTvwsd",
      accounts: [
        "ed6e15a3403d56a050ce389977779c596b760bdf716e93e517df4a8347238b91",
      ],
    },
  },
};
