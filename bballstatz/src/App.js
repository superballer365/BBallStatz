import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
// We will create these two pages in a moment
import Home from "./Components/Home/Home";
import PlayerStats from "./Components/PlayerStats/PlayerStats";
import TeamStats from "./Components/TeamStats/TeamStats";
import GameScores from "./Components/GameScores/GameScores";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserAlt,
  faHome,
  faUsers,
  faBasketballBall
} from "@fortawesome/free-solid-svg-icons";
import SideNav, { NavItem, NavIcon, NavText } from "@trendmicro/react-sidenav";

import "@trendmicro/react-sidenav/dist/react-sidenav.css";

export default function App() {
  return (
    <Router>
      <Route
        render={({ location, history }) => (
          <React.Fragment>
            <SideNav
              style={{ backgroundColor: "#0B3263" }}
              onSelect={selected => {
                const to = "/" + selected;
                if (location.pathname !== to) {
                  history.push(to);
                }
              }}
            >
              <SideNav.Toggle />
              <SideNav.Nav defaultSelected="">
                <NavItem eventKey="">
                  <NavIcon>
                    <FontAwesomeIcon icon={faHome} />
                  </NavIcon>
                  <NavText>Home</NavText>
                </NavItem>
                <NavItem eventKey="GameScores">
                  <NavIcon>
                    <FontAwesomeIcon icon={faBasketballBall} />
                  </NavIcon>
                  <NavText>Game Scores</NavText>
                </NavItem>
                <NavItem eventKey="PlayerStats">
                  <NavIcon>
                    <FontAwesomeIcon icon={faUserAlt} />
                  </NavIcon>
                  <NavText>Player Stats</NavText>
                </NavItem>
                <NavItem eventKey="TeamStats">
                  <NavIcon>
                    <FontAwesomeIcon icon={faUsers} />
                  </NavIcon>
                  <NavText>Team Stats</NavText>
                </NavItem>
              </SideNav.Nav>
            </SideNav>
            <main>
              <Route path="/" exact component={props => <Home />} />
              <Route path="/PlayerStats" component={props => <PlayerStats />} />
              <Route path="/TeamStats" component={props => <TeamStats />} />
              <Route path="/GameScores" component={props => <GameScores />} />
            </main>
          </React.Fragment>
        )}
      />
    </Router>
  );
}
