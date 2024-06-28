import {
  time,
  loadFixture,
} from "@nomicfoundation/hardhat-toolbox/network-helpers";
import { anyValue } from "@nomicfoundation/hardhat-chai-matchers/withArgs";
import { expect } from "chai";
import hre from "hardhat";
import { ManuToken } from "../typechain-types/contracts";

describe("ManuToken", function () {

  // We define a fixture to reuse the same setup in every test.
  // We use loadFixture to run this setup once, snapshot that state,
  // and reset Hardhat Network to that snapshot in every test.



  // Función de ayuda para desplegar el contrato antes de cada prueba

  async function deployManuTokenFixture() {

    // Contracts are deployed using the first signer/account by default

    const [owner, otherAccount] = await hre.ethers.getSigners();

    const TokenFactory = await hre.ethers.getContractFactory("ManuToken");
    const token = await TokenFactory.deploy("ManuToken", "MTK") as ManuToken;
    //await token.deployed();
    //await token.deployTransaction.wait();
    return token;
  }

  beforeEach(async function () {
   
  });


  describe("Deployment", function () {
    
    it("Should set the right name", async function () {
      const contract =  await loadFixture(deployManuTokenFixture);
      const name = await contract.name(); // Espera a obtener el nombre
      console.log("Name:", name)
      console.log(await contract.name());
      expect(name).to.equal("ManuToken");
    });
  });
 
});