import React, { useContext,useEffect } from 'react'
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
  const [finaldata, setfinaldata] = useState([])
  const context = useContext(AddteamContext)
  const { Addteam,getTeams} = context
  const context2 = useContext(TallyContext)
  let cond = false
  const {addFilterteam ,SelectedTeam,FilteringTeam,SelectTeams,getfilter,FilteredTeam} = context2
  const value = FilteredTeam.value
   useEffect(() => {
    
    getTeams()
  }, [])
  useEffect(() => {
    getfilter(m_id)
    console.log(FilteredTeam,"final")
  }, [m_id,filteredData])
  

  useEffect(() => {
    if(SelectedTeam.length > 0) {
      setFilteredData(
        Addteam.filter(team => {
          return SelectedTeam.includes(team.teamName);
        })
        );
        console.log(FilteredTeam,"filter")
        cond = true
      }
    }, [SelectedTeam])
    
    useEffect(() => {
      localStorage.setItem(`${m_id}-filteredData`, JSON.stringify(filteredData))
      addFilterteam(m_id,filteredData)
      console.log(filteredData,"filteredData")
      
    }, [filteredData])
    useEffect(() => {
      if(FilteredTeam && FilteredTeam.value) {
        setfinaldata(FilteredTeam.value.map(team => {
          return {
            teamName: team.teamName,
            teamTag: team.teamTag,
            teamLogo: team.teamLogo,
            player_1: team.player_1,
          player_2: team.player_2,
          player_3: team.player_3,
          player_4: team.player_4,
          player_5: team.player_5,
        };
      }));
    }
    console.log(finaldata,"finalwhy")
    FilteringTeam(filteredData)
    
  }, [FilteredTeam]);
  
  
  const handleSubmit = async () => {
    // console.log(filteredData,"value")
 
  };
  
  return (
    <>
    <Display/>
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