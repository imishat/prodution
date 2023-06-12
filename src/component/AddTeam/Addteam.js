import React, { useContext, useEffect } from 'react';
import AddteamContext from '../../context/AddteamContext/AddteamContext';
import AddteamButton from './AddteamButton';

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
    Addteam.map((tn)=> <AddteamItem key={tn._id} Addteams={tn} />
    )
}
    </div>
   
    </>
  )
}
