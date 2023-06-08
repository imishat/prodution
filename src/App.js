import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "./component/Header";
import TournamentList from "./component/TournamentList";
import GroupstageState from "./context/GroupstageContext/GroupstateState";
import TournamentState from "./context/TournamentState";

import {
  Route,
  BrowserRouter as Router,
  Routes
} from "react-router-dom";
import Addteam from "./component/AddTeam/Addteam";
import Arena from "./component/Arena/Arena";
import Display from "./component/Display/Display";
import H2h from "./component/Display/H2H/container/main/h2h";
import Matchstanding from "./component/Display/Matchstanding";
import Mvp from "./component/Display/Mvp";
import Next from "./component/Display/Next";
import OverallFragger from "./component/Display/OverallFragger";
import OverallStanding from "./component/Display/OverallStanding";
import Schedule from "./component/Display/Schedule";
import Topfragger from "./component/Display/Topfragger";
import Wwcd from "./component/Display/Wwcd";
import Groupstage from "./component/GroupStage/Groupstage";
import Logout from "./component/Logout";
import AddMatch from "./component/matches/AddMatch";
import AddteamState from "./context/AddteamContext/AddteamState";
import MatchState from "./context/Matchcontext/MatchState";
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
                        <Addteam />
                      }
                    />
                    <Route
                      exact
                      path="/match/:id"
                      element={
                        <AddMatch />
                      }
                    />
                    <Route
                      exact
                      path="/wwcd"
                      element={
                        <Wwcd />
                      }
                    />
                    <Route
                      exact
                      path="/logout"
                      element={
                        <Logout />
                      }
                    />
                    <Route
                      exact
                      path="/topf"
                      element={
                        <Topfragger />
                      }
                    />
                    <Route
                      exact
                      path="/overall"
                      element={
                        <OverallFragger />
                      }
                    />
                    <Route
                      exact
                      path="/overallmvp"
                      element={
                        <H2h />
                      }
                    />
                    <Route
                      exact
                      path="/mvp"
                      element={
                        <Mvp />
                      }
                    />
                    <Route
                      exact
                      path="/overallstanding"
                      element={
                        <OverallStanding />
                      }
                    />
                    <Route
                      exact
                      path="/display"
                      element={
                        <Display />
                      }
                    />
                    <Route
                      exact
                      path="/schedule"
                      element={
                        <Schedule />
                      }
                    />
                    <Route
                      exact
                      path="/matchstanding"
                      element={
                        <Matchstanding />
                      }
                    />
                    <Route
                      exact
                      path="/next"
                      element={
                        <Next />
                      }
                    />
                    <Route
                      exact
                      path="/tally/:id"
                      element={
                        <Arena />
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
