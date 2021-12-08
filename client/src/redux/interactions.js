import getWeb3 from "../getWeb3";
import { web3Loaded, accountLoaded, nftCountLoaded, membershipStatusLoaded, membershipTokenLoaded } from "./actions";
import BrainYieldMembershipToken from "../contracts/BrainYieldMembershipToken.json"

export const loadWeb3 = async (dispatch) => {
  const web3 = await getWeb3();
  dispatch(web3Loaded(web3));
  return web3;
}

export const loadAccount = async (dispatch, web3) => {
  const accounts = await web3.eth.getAccounts();
  const account = accounts[0];
  dispatch(accountLoaded(account));
  return account;
}

export const loadMembershipToken = async (dispatch, web3) => {
  const networkId = await web3.eth.net.getId();
  const deployedNetwork = BrainYieldMembershipToken.networks[networkId];
  const instance = new web3.eth.Contract(
    BrainYieldMembershipToken.abi,
    deployedNetwork && deployedNetwork.address,
  );
  dispatch(membershipTokenLoaded(instance));
  return instance;
}

export const loadNFTCount = async (dispatch, membershipToken, account) => {
  const count = await membershipToken.methods.balanceOf(account).call();
  dispatch(nftCountLoaded(count));
  return count;
}

export const loadMembershipStatus = async (dispatch, membershipToken, account) => {
  const isMember = await membershipToken.methods.isMember(account).call();
  dispatch(membershipStatusLoaded(isMember));
  return isMember;
}
