import React, {Component} from "react";
import Header from "./components/Header";
import WalletConnect from "./components/WalletConnect";
import Account from "./components/Account";
import Member from "./components/Member";

class App extends Component {
  render() {
    return (
      <div className="container py-2">
        <Header />
        <WalletConnect />
        <Account />
        <Member />
      </div>
    )
  }
}

export default App;
