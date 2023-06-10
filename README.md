Time ⌚️ Keeper Demo (Chainlink)
example contract on sepolia to allow keepers to "check in" peridically to a contract that provides twitter auth link requests

Prerequisites: Node plus Yarn and Git


cd chainlink-keeper-demo
git checkout chainlink-keeper-demo
install and start your 👷‍ Hardhat chain:

yarn install
yarn chain
in a second terminal window, start your 📱 frontend:

cd chainlink-keeper-demo
yarn start
in a third terminal window, gnerate a deployer account, fund it with Kovan, and 🛰 deploy your contract:

cd chainlink-keeper-demo
yarn generate
yarn account
yarn deploy
🔏 Edit your smart contract YourContract.sol in packages/hardhat/contracts

📝 Edit your frontend App.jsx in packages/react-app/src

💼 Edit your deployment scripts in packages/hardhat/deploy

📱 Open http://localhost:3000 to see the app

View example keeper contract at: https://docs.chain.link/docs/chainlink-keepers/compatible-contracts/#example-contract

make sure the chainlink contracts are installed:

cd packages/hardhat && yarn add @chainlink/contracts 
register your keepers at: https://keepers.chain.link/
 Upkeeper: Authorized consumer contract: 0x86777D9b8F27B822df90B6c2787a12ccc99B59db
 https://automation.chain.link/sepolia/31284061285348594269623791508118750205256580457492014278095639201902093836668
 https://sepolia.etherscan.io/tx/0xf451c4c4cfab307aebbe1844632fa8c209589a9d0cab453330359c313facb7ad
 https://github.com/Web3Hackathons-Buidl/Chainlink-functions.git
