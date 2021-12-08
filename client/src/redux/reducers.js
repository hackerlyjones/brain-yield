import {combineReducers} from 'redux';

function web3(state = {}, action) {
  switch (action.type) {
    case 'WEB3_LOADED':
      return { ...state, connection: action.connection };
    case 'ACCOUNT_LOADED':
      return { ...state, account: action.account};
    default:
      return state;
  }
}

function membership(state = {}, action) {
  switch (action.type) {
    case 'NFT_COUNT_LOADED':
      return { ...state, count: action.count}
    case 'MEMBERSHIP_TOKEN_LOADED':
      return { ...state, contract: action.contract}
    case 'MEMBERSHIP_STATUS_LOADED':
      return { ...state, status: action.status}
    default:
      return state;
  }
}

const rootReducer = new combineReducers({web3, membership});

export default rootReducer;