var BrainYieldGovernanceToken = artifacts.require("./BrainYieldGovernanceToken.sol");

module.exports = function(deployer) {
  deployer.deploy(BrainYieldGovernanceToken, 1000000);
};
