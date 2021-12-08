export function web3Loaded(connection) {
  return {
    type: 'WEB3_LOADED',
    connection
  }
}

export function accountLoaded(account) {
  return {
    type: 'ACCOUNT_LOADED',
    account
  }
}

export function nftCountLoaded(count) {
  return {
    type: 'NFT_COUNT_LOADED',
    count
  }
}
export function membershipTokenLoaded(contract) {
  return {
    type: 'MEMBERSHIP_TOKEN_LOADED',
    contract
  }
}

export function membershipStatusLoaded(status) {
  return {
    type: 'MEMBERSHIP_STATUS_LOADED',
    status
  }
}
