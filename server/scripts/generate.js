const secp = require("ethereum-cryptography/secp256k1");
const { toHex, utf8ToBytes } = require("ethereum-cryptography/utils");

// const privateKey = secp.utils.randomPrivateKey();
// const publicKey = secp.getPublicKey(privateKey);
// console.log("Private Key: ", toHex(privateKey));
// console.log("Public Key: ", toHex(publicKey));

(async () => {
  // You pass either a hex string, or Uint8Array
  const privateKey = secp.utils.randomPrivateKey();
  console.log("Private Key: ", toHex(privateKey));
  const publicKey = secp.getPublicKey(privateKey);
  console.log("Public Key: ", toHex(publicKey));
  const messageHash = await secp.utils.sha256("hi");
  const signature = await secp.sign(messageHash, privateKey);
  const isSigned = secp.verify(signature, messageHash, publicKey);
  console.log("Signed: ", isSigned);
})();
