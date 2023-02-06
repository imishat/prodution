import { padding } from '@mui/system'
import React, { useContext,useEffect } from 'react'
import AddteamButton from './AddteamButton';
import AddteamContext from '../../context/AddteamContext/AddteamContext';

import AddteamItem from './AddteamItem';



export default function Addteam() {
   const context = useContext(AddteamContext)
   const { Addteam,getTeams} = context
   useEffect(() => {
    getTeams()
  }, [])
  return (
    <>
    <AddteamButton/>
    <div style={{marginLeft:"80px",marginTop:"20px"}}>
    {Addteam.length===0? "NO TEAMS":
    Addteam.map((tn)=>{
      return <AddteamItem Addteams={tn} />
    })
}
    </div>
   
    </>
  )
}
