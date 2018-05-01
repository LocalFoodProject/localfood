const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3');
const provider = ganache.provider();
const web3 = new Web3(provider);
// const { interface, bytecode } = require('../compile');
const compiledLocalFood = require('../src/build/Campaign.json');
const compiledFactory = require('../src/build/CampaignFactory.json');

let accounts;
let localFood;

beforeEach(async () => {
  accounts = await web3.eth.getAccounts();

  factory = await new web3.eth.Contract(JSON.parse(compiledFactory.interface))
    .deploy({ data: compiledFactory.bytecode })
    .send({ from: accounts[0], gas: "1000000" });

  await factory.methods.createCampaign("100").send({
    from: accounts[0],
    gas: "1000000"
  });

  [campaignAddress] = await factory.methods.getDeployedCampaigns().call();
  campaign = await new web3.eth.Contract(
    JSON.parse(compiledCampaign.interface),
    campaignAddress
  );
});
// beforeEach(async () => {
//   accounts = await web3.eth.getAccounts();
//   localFood = await new web3.eth.Contract(
//     JSON.parse(compiledGruntFund.interface)
//   )
//     .deploy({ data: compiledGruntFund.bytecode })
//     .send({ from: accounts[0], gas: '2000000' });

//   factory = await new web3.eth.Contract(
//     JSON.parse(compiledProjectFactory.interface)
//   )
//     .deploy({ data: compiledGruntFund.bytecode })
//     .send({ from: accounts[0], gas: '2000000' });
// });

describe('The Factory Contract', () => {
  it('deploys a factory ', () => {
    assert.ok(factory.options.address);
    assert.ok(localFood.options.address);
  });

  // it('can create two different projects', async () => {
  //   const project1 = await factory.methods
  //     .createProject()
  //     .send({
  //       gas: '1000000',
  //       from: accounts[0]
  //     })
  //     .catch(error => console.log('error', error));
  //   const project2 = await factory.methods
  //     .createProject()
  //     .send({
  //       gas: '1000000',
  //       from: accounts[0]
  //     })
  //     .catch(error => console.log('error', error));

  //   const allProjects = await factory.methods
  //     .getDeployedCampaigns()
  //     .call()
  //     .catch(error => console.log('error', error));

  //   assert.notEqual(allProjects[0], allProjects[1]);
  // });

  // tk write a test that the creator can approve teh first task
  // tk when you approve a task, only one task gets approved
});

describe('Campaign ', () => {
  it('deploys the campaign contract ', () => {
    assert.ok(localFood.options.address);
  });

  it ('subscriber gets added after contribution', async () => {
         await campaign.methods.contribute().send({
      from: accounts[1],
      value: "500"
    });
    const isContributor = await campaign.methods.contributors(accounts[1]).call;

    assert(isContributor);
  })
 
  

  it ('farmer cant withdraw if contribution is not greater than goal', async() =>{
       const campaign = 
    await localFood.methods.contribute().send({
           from: accounts[2],
           value: web3.utils.toWei(1,"ether")
       })
       await localFood.methods.contribute().send({
           from: accounts[3],
           value: web3.utils.toWei(1,"ether")
       })
       await localFood.methods.contribute().send({
           from: accounts[4],
           value: web3.utils.toWei(1,"ether")
       })
      const balance = await web3.eth.getBalance(accounts[1]);

      await localFood.methods.withdraw().send({
          from:accounts[1],
          gas: '100000'
      })
      assert

  }

  it (' farmer can withdraw when the contribution is greater than goal',async()=>{

  })


})