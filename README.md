# Description

This project deploys ERC20 token and ERC721 (nft) to Ethereum blockchain
It has three main folders:

- blockchain: contains the solidity smart contracts to be deployed on the blockchain
- backend: API to allow frontend to do some actions (WIP)
- frontend/thirdweb-app: web app with nextjs and thirdweb component (react)
- frontent/web3-app: web app with vanilla js

## Smart Contracts Requirements

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



## smart contracts management


Basic compile, test, local hardhat blockchain and console scripts:

- `bun hardhat compile`
- `bun hardhat test`
- `bun hardhat deploy-hardhat` requires `bun run-hardhat` on another terminal, port is 7545
- `bun hardhat deploy-ganache` deploys to  port 8545 , ganache should be running
- `bun console` starts the hardhat console

Build & deployment scripts (recommended):

- `bun deploy-ganache` compile, test and deploy to local ganache on port 8545
- `bun deploy-hardhat` compile, test and deploy to local hardhat node on port 7545

Running bun console, smart contracts can be used like this:

    `const ManuToken = await ethers.getContractAt("ManuToken", "deployed_contract_address");
    await ManuToken.totalSupply();`


## nextjs frontend management

npx create-next-app@latest


bun i thirdweb
 thirdweb@5.30.0 

 # Third party

react
nextjs 
plaid -> bank integration
appwrite -> backend
tailwind -> css
chart.js -> charting
shadcn -> components bun add shadcn-ui@0.8.0 init shadcn-ui@0.8.0
sentry -> monitoring

# starting frontend from scratch


- ``bun create next-app@latest  ./ --typescript --tailwind --eslint` (no scr, app router, no import alias)
- `bun add shadcn-ui@latest`  
- `bun shadcn-ui init` (defaut, slate, css variables yes)