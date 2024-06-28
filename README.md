# Description

This project deploys ERC20 token and ERC721 (nft) to Ethereum blockchain
It has three main folders:

- blockchain: contains the solidity smart contracts to be deployed on the blockchain
- backend: API to allow frontend to do some actions (WIP)
- frontend/thirdweb-app: web app with nextjs and thirdweb component (react)
- frontent/web3-app: web app with vanilla js

# Smart Contracts Requirements

- node v20.14.0
- npm 10.8.1
- bun 1.1.15

bun install dotenv

--------
bun install --save-dev hardhat 
- hardhat 2.22.5

bun install --save-dev typescript
- typescript@5.5.2

bun install --save-dev ts-node
- ts-node@10.9.

bun install --save-dev @nomicfoundation/hardhat-toolbox
- @nomicfoundation/hardhat-toolbox@5.0.0

 bun install --save-dev @openzeppelin/contracts

- @openzeppelin/contracts@5.0.2
- chai 5.1.1
bun install --save-dev @nomiclabs/hardhat-ethers ethers

installed @nomiclabs/hardhat-ethers@2.2.3
installed ethers@6.13.1

# Frontend requirements



# contract management

- bun hardhat contracts-compile
- bun hardhat contracts-test
- bun hardhat contracts-deploy-hardhat requires bun hardhat blockchain-run
- bun hardhat contracts-deploy-ganache deploys to localhost:8545 , ganache should be running

# frontend management


