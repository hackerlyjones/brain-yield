import React from "react";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import Header from "./components/Header";
import WalletConnect from "./components/WalletConnect";
import Account from "./components/Account";
import Member from "./components/Member";
import Navigation from "./components/Navigation";
import NewsletterContent from "./components/NewsletterContent";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/newsletter" element={<Newsletter />} />
      </Routes>
    </BrowserRouter>
  );
}

function Home() {
  return (
    <div className="container py-2">
      <nav>
        <Navigation />
      </nav>
      <main>
        <Header />
        <WalletConnect />
        <Account />
        <Member />
      </main>
    </div>
  )
}

function Newsletter() {
  return (
    <div className="container py-2">
      <nav>
        <Navigation />
      </nav>
      <main>
        <Header title="NewsletterContent" />
        <NewsletterContent />
      </main>
    </div>
  )
}

export default App;
