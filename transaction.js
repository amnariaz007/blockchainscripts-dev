const Web3 = require("web3");
const Provider = require("@truffle/hdwallet-provider");

const mainnetprovider =
  "https://mainnet.infura.io/v3/f542d5aef81e4db787b429070e4353e4";

const ownerPrivateAddress = `f3d1dd485af7af5ae46ba9f7000d414789a802163875f89cf9c3782ad7847819`;
const provider = new Provider(ownerPrivateAddress, mainnetprovider);
const web3 = new Web3(provider);

const getTransactionReceipt = async (tx) => {
  const response = await web3.eth.getTransaction(tx);
  if (!response) {
    throw new Error("Transaction receipt failed!");
  }
  return response;
};

getTransactionReceipt(
  "0x997dc25147ea155d3d5eaa7b5bd78762ae507d931d51d6dcc61e4042e3c95041"
).then((res) => {
  console.log(res);
});
