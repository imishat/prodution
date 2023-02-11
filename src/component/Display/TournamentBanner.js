import React from 'react'
import GroupstageContext from '../../context/GroupstageContext/GroupstageContext'
import { useContext } from 'react'
export default function TournamentBanner() {

  const context = useContext(GroupstageContext)
  const {Groups,getGroup} =context
  
  return (
    
    <div style={{display:"flex",border:"4px solid green",position:"absolute",bottom:"0px", left:"5px" ,height:"150px",width:"485px",justifyContent:"center",alignItems:"center",background:"linear-gradient(to right,#00100b,#055e3d)"}}>

    <div style={{background:"linear-gradient(to ,#00100b,#055e3d)"}}   >
      <img height="125px" src="https://media.discordapp.net/attachments/1043905461193285702/1066734848343031828/400.png" alt="" />
    </div>
    <div style={{display:"flex",flexDirection:"column",justifyContent:"center",background:"linear-gradient(to right, skyblue, #87CEEB, #ADD8E6)",height:"125px",padding:"0px 5px",alignItems:"center",width:"330px"}} >
        <h2 style={{fontFamily:"Bebas Neue "}} >{Groups.title}</h2>
        <h4 style={{backgroundColor:"black",color:"white",width:"300px",textAlign:"center",marginTop:"-5px"}}> MATCH 13/{Groups.total_matches} </h4>
        <h4 style={{backgroundColor:"black",color:"white",width:"250px",textAlign:"center"}}> ERANGEL </h4>
    </div>
    </div>
  )
}
