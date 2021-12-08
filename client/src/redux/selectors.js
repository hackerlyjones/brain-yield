import {get} from 'lodash';
import {createSelector} from 'reselect';

const web3 = state => get(state, 'web3.connection', null);
export const web3Selector = createSelector(web3, w => w);

const account = state => get(state, 'web3.account', null);
export const accountSelector = createSelector(account, a => a);

const nftCount = state => get(state, "membership.count", null);
export const nftCountSelector = createSelector(nftCount, c => c);

const membershipToken = state => get(state, 'membership.contract', null);
export const membershipTokenSelector = createSelector(membershipToken, mt => mt);

const membershipStatus = state => get(state, 'membership.status', null);
export const membershipStatusSelector = createSelector(membershipStatus, ms => ms);
