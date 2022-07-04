const Web3 = require("web3");
const web3 = new Web3(
  "https://mainnet.infura.io/v3/f542d5aef81e4db787b429070e4353e4"
);
const contractAddress = "0xf87e31492faf9a91b02ee0deaad50d51d56d5d4d"; //decentraland
const { DECENTRAABI } = require("./abijson/icuryErc1155");

const contractAbi = JSON.parse(DECENTRAABI);

const contract = new web3.eth.Contract(contractAbi, contractAddress);

const transferFrom = async () => {
  try {
    const data = await contract.getPastEvents("Transfer", {
      filter: { assetId: ["40153319296670738688678203676948648951798"] },
      fromBlock: 0,
      toBlock: "latest",
    });

    console.log(data, "data");
  } catch (err) {
    console.log(err, "error");
  }
};

transferFrom();
