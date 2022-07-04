const Web3 = require("web3");
const Provider = require("@truffle/hdwallet-provider");
const { DECENTRAABI, Wolve_ABI } = require("./abijson/icuryErc1155");
const contractAddress =
  // "0xca7b3ba66556C4Da2E2A9AFeF9C64F909A59430a" ||
  "0xf87e31492faf9a91b02ee0deaad50d51d56d5d4d";

const mainnetprovider =
  "https://mainnet.infura.io/v3/f542d5aef81e4db787b429070e4353e4";

const ownerPrivateAddress = `f3d1dd485af7af5ae46ba9f7000d414789a802163875f89cf9c3782ad7847819`;
const provider = new Provider(ownerPrivateAddress, mainnetprovider);
const web3 = new Web3(provider);

const DecentraContractInstance = new web3.eth.Contract(
  (abi = JSON.parse(DECENTRAABI)),
  (address = contractAddress)
);

let options = {
  filter: {
    assetId:
      "115792089237316195423570985008687907836255866319593640866288853636324719067024",
  },
  fromBlock: 0,
  toBlock: 14000000,
};

DecentraContractInstance.getPastEvents("Transfer", options)
  .then((results) => console.log(results))
  .catch((err) => console.log(err));
