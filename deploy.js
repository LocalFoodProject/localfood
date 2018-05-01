const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const compiledFactory = require('./src/build/CampaignFactory.json');

const provider = new HDWalletProvider(
  'junior naive security reveal wet stuff jaguar entire blush trigger museum vintage',
  'https://rinkeby.infura.io/qWWCAOLoD65CmWAo4jLg'
);

const web3 = new Web3(provider);

const deploy = async () => {
  const accounts = await web3.eth.getAccounts();

  const result = await new web3.eth.Contract(
    JSON.parse(compiledFactory.interface)
  )
    .deploy({ data: compiledFactory.bytecode })
    .send({ gas: '2000000', from: accounts[0] });

  console.log('Contract deployed to', result.options.address);
};
deploy();
