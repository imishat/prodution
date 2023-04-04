
import React from 'react'
import {TournamentListItem} from './TournamentListItem'
import Tounamentforms from './tounamentforms'
import { useContext, useEffect } from 'react'
import TournamentContext from '../context/TournamentContext'


export default function 
TournamentList
(props) {
  const context = useContext(TournamentContext)
  
 const {tournaments,getTournament}= context
 useEffect(() => {
   getTournament()
  
 }, [])
 
  return (
    <>
    <Tounamentforms />
    <div className='' style={{margin:"60px 30px", color:"white", backgroundColor:"#061a24",height:"100vh",borderRadius:"10px",padding:"20px 20px"}}>
    <h2 style={{textDecoration:"underline",marginBottom:"20px"}}>Tournament List</h2>
   

    {tournaments.length===0? "NO TOURNAMENTS":
    tournaments.map((tn)=>{
      return <TournamentListItem key={tn._id}  tournaments={tn}  />
    })
}
    
    </div>
    </>
  )
}
