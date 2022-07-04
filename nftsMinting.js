const Web3 = require("web3");
const Provider = require("@truffle/hdwallet-provider");
const { IcuryAbiErc1155 } = require("./abijson/icuryErc1155");
const contractAddress = "0x2389dE7f52d267e32BA5db22BAACc7B729D2E602"; // mainnnet address

// const contractAddress = "0x59628e5eDeD53cB549D554E56D1aF3F2b68aeE20"; // testnet address
// const testnetProvider = "https://rpc-mumbai.maticvigil.com"; //testnet provider
const mainnetprovider = "https://polygon-rpc.com";
const byteData = "0x";
const tokenAmounts = Array.from(Array(100)).fill(1); // tokem amount is 1 from 0-99
const tokenIds = Array.from(Array(100).keys()); // ids amount from 0-99

// client below credentials
const ownerPublicAddress = `0x88c447F39C59A2FBD6AbE8e85F9f13085D5789A0`;
const ownerPrivateAddress = `81d0820bd9e0617ae0c0e37910c904454806b813c2e7313a95b9414a3f0a0b0d`;

// const ownerPublicAddress = `0x29c5E83A0F106f9c9b136AD305C72Aeea296049E`; // testnet
// const ownerPrivateAddress = `1cc9605e940eae3a34fc25523fcf351db86dc6a8fec3fd28ec3dd695bc3264d2`; //testnet

const provider = new Provider(ownerPrivateAddress, mainnetprovider); // testnet provider change when deploy in mainnet
const web3 = new Web3(provider);

const Icury1155Contract = new web3.eth.Contract(
  (abi = JSON.parse(IcuryAbiErc1155)),
  (address = contractAddress)
);

let batchObj = {
  ownerPublicAddress,
  tokenIds,
  tokenAmounts,
  byteData,
};

async function mintNfts() {
  try {
    // const instanceOfMinting = await Icury1155Contract.methods
    //   .batchMint(...Object.values(batchObj))
    //   .send({ from: ownerPublicAddress });

    // if (!instanceOfMinting) throw new Error("Minting failed");

    for (let i = 0; i < tokenIds.length; i++) {
      console.log("Counter" + i);
      let success = await Icury1155Contract.methods
        ._setURI(
          tokenIds[i],
          `https://gateway.pinata.cloud/ipfs/QmR6iHo4C8PzM3XJNYgQZjK2bAoDGH9QVmxWjsa9DVgewA/${i}.json`
        )
        .send({ from: ownerPublicAddress });

      console.log(success);
    }
  } catch (err) {
    console.log(err);
    console.log(err.message);
  }
}

mintNfts();
