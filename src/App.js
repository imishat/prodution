import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./component/Header";
import Tounamentforms from "./component/tounamentforms";
import TournamentList from "./component/TournamentList";
import TournamentState from "./context/TournamentState";
import GroupstageState from "./context/GroupstageContext/GroupstateState";

import { useState, useEffect } from "react";
import {
  Route,
  Switch,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import Groupstage from "./component/GroupStage/Groupstage";
import Addteam from "./component/AddTeam/Addteam";
import AddteamState from "./context/AddteamContext/AddteamState";
import AddMatch from "./component/matches/AddMatch";
import MatchState from "./context/Matchcontext/MatchState";
import Logout from "./component/Logout";
import Wwcd from "./component/Display/Wwcd";
import Topfragger from "./component/Display/Topfragger";
import Mvp from "./component/Display/Mvp";
import Display from "./component/Display/Display";
import Schedule from "./component/Display/Schedule";
import Next from "./component/Display/Next";
import Arena from "./component/Arena/Arena";
import TallyState from "./context/TallyContext/TallyState";

function App() {

  return (
    <>
    <TallyState>

   
    <MatchState>

 
    <GroupstageState>

    <AddteamState>

    <TournamentState>

      <Router>
        <Header />
        <Routes>
          <Route
            exact
            path="/"
            element={
              <>
                <TournamentList
                  />
              </>
            }
            />
          <Route
            exact
            path="/groupstage/:id"
            element={
              <Groupstage
              />
            }
            />
          <Route
            exact
            path="/teams"
            element={
              <Addteam/>
            }
            />
          <Route
            exact
            path="/match/:id"
            element={
              <AddMatch/>
            }
            />
          <Route
            exact
            path="/wwcd"
            element={
             <Wwcd/>
            }
            />
          <Route
            exact
            path="/logout"
            element={
             <Logout/>
            }
            />
          <Route
            exact
            path="/topf"
            element={
             <Topfragger/>
            }
            />
          <Route
            exact
            path="/mvp"
            element={
             <Mvp/>
            }
            />
          <Route
            exact
            path="/display"
            element={
              <Display/>
            }
            />
          <Route
            exact
            path="/schedule"
            element={
             <Schedule/>
            }
            />
          <Route
            exact
            path="/next"
            element={
             <Next/>
            }
            />
          <Route
            exact
            path="/tally/:id"
            element={
             <Arena/>
            }
            />
        </Routes>
      </Router>
            </TournamentState>
            </AddteamState>
            </GroupstageState>
            </MatchState>
            </TallyState>
    </>
  );
}

export default App;
