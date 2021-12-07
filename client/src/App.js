import React, {Component} from "react";
import Account from "./components/Account";
import Header from "./components/Header";
import TokenBalance from "./components/TokenBalance";
import WalletConnect from "./components/WalletConnect";

class App extends Component {
  render() {
    return (
      <div className="container py-2">
        <Header />
        <WalletConnect />
        <Account />
        <TokenBalance />
      </div>
    )
  }
}

export default App;
