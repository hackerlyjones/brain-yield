var BrainYield = artifacts.require("./BrainYield.sol");

module.exports = function(deployer) {
  deployer.deploy(BrainYield, 1000000);
};
