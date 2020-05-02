import React from "react";
import logo from "../../Images/logo.svg";
import "./Home.css";

function Home() {
  console.log("trying to render home");
  return (
    <div className="Home">
      <header className="Home-header">
        <img src={logo} className="Home-logo" alt="logo" />
        <p>BBallStatz!!</p>
      </header>
    </div>
  );
}

export default Home;
