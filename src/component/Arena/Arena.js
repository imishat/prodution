import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import AddteamContext from '../../context/AddteamContext/AddteamContext';
import TallyContext from '../../context/TallyContext/TallyContext';
import AddTeamB from './AddTeamB';
import SelectTeam from './SelectTeam';
import TallyIteam from './TallyIteam';
import { useState } from 'react';
import Display from '../Display/Display';


export default function Addteam() {
  const mid = useParams()
  const m_id = mid.id
  const [filteredData, setFilteredData] = useState(JSON.parse(localStorage.getItem(`${m_id}-filteredData`)) || []);
  
  const context = useContext(AddteamContext)
  const { Addteam, getTeams } = context
  const context2 = useContext(TallyContext)
  let cond = false
  const { addFilterteam, SelectedTeam, FilteringTeam, SelectTeams, getfilter, FilteredTeam, setAlive } = context2
  const value = FilteredTeam.value
  useEffect(() => {

    getTeams()
  }, [])
  useEffect(() => {
    getfilter(m_id)
    console.log(FilteredTeam, "final")
  }, [m_id, filteredData])


  useEffect(() => {
    // Find the team array for the selected match
    const selectedMatch = SelectedTeam.find(filter => filter.matchId === m_id);
    const selectedTeamArray = selectedMatch ? selectedMatch.team : [];

    console.log(selectedTeamArray,"bibeklaudu")
  
    // Filter Addteam based on the selected teams for the match
    const filteredAddteam = Addteam.filter(team =>{ return selectedTeamArray.includes(team.teamName)});
  
    // Update the filter and set the alive state based on the selected teams
    if (filteredAddteam.length > 0) {
      setFilteredData(filteredAddteam);
      // setAlive(true);
    } else {
      setFilteredData([]);
      // setAlive(false);
    }
    console.log(filteredData,"bibek laudu")
  }, [SelectedTeam]);
  

  useEffect(() => {
    localStorage.setItem(`${m_id}-filteredData`, JSON.stringify(filteredData))
    addFilterteam(m_id, filteredData)
    console.log(filteredData, "filteredData")

  }, [filteredData])



  const handleSubmit = async () => {
    // console.log(filteredData,"value")

  };

  return (
    <>
      <Display />
      <AddTeamB m_id={m_id} handleSubmit={handleSubmit} />

      <div style={{ marginLeft: "57px", marginTop: "75px" }}>
        <div className="d-flex flex-wrap">
          {filteredData.map((teamData, index) => {
            return (
              <div key={index} className="col-3">
                <TallyIteam count={filteredData.length} m_id={m_id} key={teamData.teamName} teamData={teamData} />
              </div>
            );
          })}
        </div>
      </div>



    </>
  )
}