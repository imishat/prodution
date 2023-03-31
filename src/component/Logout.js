import React, { useEffect } from 'react'
import CustomizedTables from "./Display/Table"
import TournamentBanner from './Display/TournamentBanner'
export default function Logout(props) {
  useEffect(() => {
    console.log(props.m_id,"CG")
  }, [])
  
  return (
    <div >

    <div style={{marginTop:"100px",width:"300px",position:"absolute",right:"3px"}}>  
        <CustomizedTables m_id={props.m_id} />
        
    </div>
    <TournamentBanner/>
    </div>
  )
}
