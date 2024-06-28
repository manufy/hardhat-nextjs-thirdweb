import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import dotenv from "dotenv";

dotenv.config(); // Carga las variables de entorno


const config: HardhatUserConfig = {
  solidity: "0.8.24",
  networks: {
    ganache: {
      url: "http://127.0.0.1:8545", //  URL y puerto coincidan de la instancia de Ganache
      accounts: [process.env.GANACHE_ACCOUNT1_PRIVATE_KEY!] // ! para evitar un error de tipo undefined
    }
  },
  paths: {
    sources: "./contracts",
    tests: "./test",
    cache: "./cache",
    artifacts: "./artifacts",
  },
};

export default config;
