var BrainYieldMembership = artifacts.require("./BrainYieldMembershipToken.sol");

module.exports = function(deployer) {
  deployer.deploy(BrainYieldMembership);
};
