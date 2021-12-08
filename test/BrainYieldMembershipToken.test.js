const BrainYieldMembershipToken = artifacts.require("BrainYieldMembershipToken")

// WARNING: State of these tests carries through to subsequent tests. I'm not literate enough in these systems to know
// how to reset state before each test.
contract("BrainYieldMembershipToken with Royalties", (accounts) => {
  const [deployerAddress, userWallet] = accounts;

  it("is possible to mint NFTs", async () => {
    const brainYieldNFT = await BrainYieldMembershipToken.deployed();

    await brainYieldNFT.mint(userWallet);
  })

  it("provides a token URI for retrieving metadata", async () => {
    const brainYieldNFT = await BrainYieldMembershipToken.deployed();

    const metadataURI = await brainYieldNFT.tokenURI(0);

    assert.equal(metadataURI, "http://0.0.0.0/update/nft/metadata/addy/0");
  })

  it("allows us to set royalties", async () => {
    const brainYieldNFT = await BrainYieldMembershipToken.deployed();
    const tokenInstanceID = 0;
    const percentageBasisPoints = 250;
    const payableAddress = deployerAddress;

    await brainYieldNFT.setRoyalties(tokenInstanceID, payableAddress, percentageBasisPoints);

    const royalties = await brainYieldNFT.getRaribleV2Royalties(0);
    assert.equal(royalties[0].value, '250');
    assert.equal(royalties[0].account, payableAddress);
  })

  it("works with ERC2981 royalties", async () => {
    const brainYieldNFT = await BrainYieldMembershipToken.deployed();
    const tokenInstanceID = 0;
    const salePrice = 100_000;

    const erc2981Royalties = await brainYieldNFT.royaltyInfo(tokenInstanceID, salePrice)

    const expectedCut = 2_500;
    assert.equal(erc2981Royalties.royaltyAmount, expectedCut);
    assert.equal(erc2981Royalties.receiver, deployerAddress);
  })

  it("returns true when the user is a member", async () => {
    const brainYieldNFT = await BrainYieldMembershipToken.deployed();

    const isMember = await brainYieldNFT.isMember(userWallet);

    assert.equal(isMember, true);
  })

  it("returns false when the user is not a member", async () => {
    const brainYieldNFT = await BrainYieldMembershipToken.deployed();

    const isMember = await brainYieldNFT.isMember(accounts[5]);

    assert.equal(isMember, false);
  })
})
