import { ethers } from "hardhat";

async function main() {
  const contractsToDeploy = [
    { name: "WeenusToken", args: [] },
    { name: "XeenusToken", args: [] },
    { name: "YeenusToken", args: [] },
    { name: "ZeenusToken", args: [] },
  ];

  for (let i = 0; i < contractsToDeploy.length; i += 1) {
    const { name, args } = contractsToDeploy[i];
    const instance = await ethers.getContractFactory(name);
    const contract = await instance.deploy(...args);

    await contract.deployed();

    console.log(`${name} deployed to:`, contract.address);
  }
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
