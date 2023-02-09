import React, { useContext,useEffect } from 'react'
import { useParams } from 'react-router-dom';
import AddteamContext from '../../context/AddteamContext/AddteamContext';
import TallyContext from '../../context/TallyContext/TallyContext';
import AddTeamB from './AddTeamB';
import SelectTeam from './SelectTeam';
import TallyIteam from './TallyIteam';
import { useState } from 'react';


export default function Addteam() {
  const mid = useParams()
  const m_id = mid.id
  const [filteredData, setFilteredData] = useState([]);
   const context = useContext(AddteamContext)
   const { Addteam,getTeams} = context
   const context2 = useContext(TallyContext)
   let cond = false
   const {addFilterteam ,SelectedTeam,FilteringTeam,SelectTeams,getfilter,FilteredTeam} = context2
   useEffect(() => {
    getTeams()
   
  }, [])
   useEffect(() => {
   
    getfilter(m_id)
  }, [m_id])
  useEffect(() => {
    if(SelectedTeam.length > 0) {
      setFilteredData(
        Addteam.filter(team => {
          return SelectedTeam.includes(team.teamName);
        })
      );
      console.log(filteredData,"filter")
      cond = true
      FilteringTeam(filteredData)
    }
  }, [SelectedTeam])
  
  useEffect(() => {
    
    addFilterteam(m_id,filteredData)
    
  }, [filteredData])
  
  
  const handleSubmit = async () => {
    console.log(filteredData,"value")
 
  };
  
  return (
    <>
    <AddTeamB  handleSubmit={handleSubmit} />
    <div style={{marginLeft:"57px",marginTop:"75px"}}>
    <div className="d-flex flex-wrap">
        {filteredData.map((teamData, index) => {
          return (
            <div key={index} className="col-3">
              <TallyIteam key={teamData.teamName} teamData={teamData} />
            </div>
          );
        })}
      </div>
        </div>
    
    
    
    </>
  )
}