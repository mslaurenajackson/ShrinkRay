import React, { useState } from "react";
import "./styles.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
// import Links from "./components/Links"; // Uncomment if you have this

function App() {
  return (
    <div className="App">
      <Header />
      <h1>Shrink Ray!</h1>
      <h2>Pew Pew!</h2>
      {/* TODO: Fix Links component */}
      {/* <Links /> */}
      <Footer />
    </div>
  );
}

export default App;
