import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import AddteamContext from "../../context/AddteamContext/AddteamContext";
import TallyContext from "../../context/TallyContext/TallyContext";
import AddTeamB from "./AddTeamB";
import TallyIteam from "./TallyIteam";

export default function Addteam() {
  
  const mid = useParams();
  const m_id = mid.id;
  const [filteredData, setFilteredData] = useState([]);

  const context = useContext(AddteamContext);
  const { Addteam, getTeams } = context;
  const context2 = useContext(TallyContext);
  let cond = false;
  const {
    addFilterteam,
    SelectedTeam,
    FilteringTeam,
    SelectTeams,
    getfilter,
    FilteredTeam,
    setAlive,
    getselectedteam
  } = context2;
  const value = FilteredTeam.value;
  useEffect(() => {
    getTeams();
    getselectedteam();
  },[]);
  useEffect(() => {
    getfilter(m_id);
  }, [m_id, filteredData]);

  useEffect(() => {
    // Find the team array for the selected match
    const selectedMatch = SelectedTeam.find(
      (filter) => filter.matchId === m_id
    );

    const selectedTeamArray = selectedMatch ? selectedMatch.team : [];


    // Filter Addteam based on the selected teams for the match
    const filteredAddteam = Addteam.filter((team) => {
      return selectedTeamArray.includes(team.teamName);
    });
    console.log(selectedMatch);

    // Update the filter and set the alive state based on the selected teams
    if (filteredAddteam.length > 0) {
      setFilteredData(filteredAddteam);
      // setAlive(true);
    } else {
      setFilteredData([]);
      // localStorage.setItem(`${m_id}-filteredData`, JSON.stringify([]));
      // setAlive(false);
    }
  }, [SelectedTeam]);

  useEffect(() => {
    // localStorage.setItem(`${m_id}-filteredData`, JSON.stringify(filteredData));
    addFilterteam(m_id, filteredData);
  }, [filteredData]);

  

  return (
    <>
      {/* <Display /> */}
      <AddTeamB m_id={m_id}  />

      <div style={{ marginLeft: "57px", marginTop: "75px" }}>
        <div className="d-flex flex-wrap">
          {filteredData.map((teamData, index) => {
            
            return (
              <div key={index} className="col-3">
                <TallyIteam
                  count={filteredData.length}
                  m_id={m_id}
                  key={teamData.teamName}
                  teamData={teamData}
                />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
