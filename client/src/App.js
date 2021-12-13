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
import ConfigureAmplify from "./components/ConfigureAmplify";
import NewsletterIndex from "./components/NewsletterIndex";
import NewsletterContent from "./components/NewsletterContent";
import Upload from "./components/Upload";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/newsletter" element={<Newsletter/>}/>
      </Routes>
    </BrowserRouter>
  );
}

function Home() {
  return (
    <div className="container py-2">
      <Navigation/>
      <main>
        <Header/>
        <WalletConnect/>
        <Account/>
        <Member/>
      </main>
    </div>
  )
}

function Newsletter() {
  return (
    <div className="container py-2">
      <Navigation/>
      <main>
        <Header title="The BrainYield™ Newsletter"/>
        <ConfigureAmplify />
        <NewsletterIndex />
        <NewsletterContent/>
        <Upload />
      </main>
    </div>
  )
}

export default App;
