import React from "react";
import logo from "../../Images/Basketball.png";
import "./Home.css";

function Home() {
  console.log("trying to render home");
  return (
    <div className="Home">
      <header className="Home-header">
        <p>Welcome to BBallStatz!</p>
        <img src={logo} className="Home-logo" alt="logo" />
      </header>
    </div>
  );
}

export default Home;
