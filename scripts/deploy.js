import { network } from "hardhat";

async function main() {
  const { ethers } = await network.connect();
// Mesma coisa que o factory seguido de deploy e await deploy, mas com o objetivo de reduzir boiler plate
// Vem do @nomicfoundation/hardhat-ethers
  const helloWorld = await ethers.deployContract("HelloWorld", [
    "Hello, World!",
  ]);

  console.log("Contract to address: ", await helloWorld.getAddress());

  const message = await helloWorld.getMessage();
  console.log(message)

}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
