const BrainYield = artifacts.require("BrainYield")

contract("BrainYield", (accounts) => {
  before(async () => {
    brainYield = await BrainYield.deployed()
  })

  it("gives the owner of the token 1 million tokens", async () => {
    let balanceAsWei = await brainYield.balanceOf(accounts[0]);
    let balance = web3.utils.fromWei(balanceAsWei, "ether");

    assert.equal(balance, 1000000, "Balance should be 1 million tokens for the contract creator.");
  })

  it("can transfer token between accounts", async () => {
    let amount = web3.utils.toWei('1000', "ether")
    await brainYield.transfer(accounts[1], amount, {from: accounts[0]})

    let balanceAsWei = await brainYield.balanceOf(accounts[1]);
    let balance = web3.utils.fromWei(balanceAsWei, "ether");

    assert.equal(balance, 1000, "Balance should be 1 thousand tokens after transfer.");
  })
})
