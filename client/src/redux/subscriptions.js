import {loadAccount, loadMembershipStatus, loadMembershipToken, loadNFTCount} from "./interactions";

export const subscribeToAccountsChanging = (dispatch, web3) => {
  window.ethereum.on('accountsChanged', async function (accounts) {
    const account = await loadAccount(dispatch, web3);
    const membershipToken = await loadMembershipToken(dispatch, web3);
    await loadNFTCount(dispatch, membershipToken, account);
    await loadMembershipStatus(dispatch, membershipToken, account);
  });
}