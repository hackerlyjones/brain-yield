import React, {Component} from "react";
import Header from './components/Header'

import SimpleStorageContract from "./contracts/SimpleStorage.json";
import getWeb3 from "./getWeb3";

class App extends Component {
  state = { storageValue: 0, web3: null, accounts: null, contract: null };

  componentDidMount = async () => {
    try {
      const web3 = await getWeb3();
      const accounts = await web3.eth.getAccounts();
      const instance = await this.getContractInstance(web3);

      const callback = this.runExample;
      this.setState({ web3, accounts, contract: instance }, callback);
    } catch (error) {
      alert(
        `Failed to load web3, accounts, or contract. Check console for details.`,
      );
      console.error(error);
    }
  };

  async getContractInstance(web3) {
    const networkId = await web3.eth.net.getId();
    const deployedNetwork = SimpleStorageContract.networks[networkId];
    return new web3.eth.Contract(
        SimpleStorageContract.abi,
        deployedNetwork && deployedNetwork.address,
    );
  }

  runExample = async () => {
    const { accounts, contract } = this.state;
    const newValue = 17;
    await contract.methods.set(newValue).send({ from: accounts[0] });
    const response = await contract.methods.get().call();
    this.setState({ storageValue: response });
  };

  render() {
    if (!this.state.web3) {
      return <div>Loading Web3, accounts, and contract...</div>;
    }
    return (
      <div className="App">
        <Header />
        <div>The stored value is: {this.state.storageValue}</div>
      </div>
    );
  }
}

export default App;
