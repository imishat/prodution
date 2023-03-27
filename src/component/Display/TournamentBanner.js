import React from 'react'
import GroupstageContext from '../../context/GroupstageContext/GroupstageContext'
import { useContext } from 'react'
export default function TournamentBanner() {

  const context = useContext(GroupstageContext)
  const {Groups,getGroup} =context
  
  return (
    
    <div style={{display:"flex",position:"absolute",bottom:"0px", left:"5px" ,height:"142px",width:"530px",justifyContent:"center",alignItems:"center"}}>
      <div style={{width:"144px",height:"141px",backgroundColor:"#004e37",marginRight:"3px"}}>
        <img width="144px" height="141px" src="https://media.discordapp.net/attachments/1067392894236905472/1086146168792305675/logo400.png" alt="" />
      </div>
      <div style={{height:"142px",display:"flex",flexDirection:"column",justifyContent:"center"}}>
    <div style={{display:"flex",flexDirection:"column",justifyContent:"center",height:"114px",width:'378px',backgroundColor:"#252525",color:"white",borderLeft:"5px solid #004e37",borderBottom:"4px solid #004e37",paddingLeft:"5px"}}>
    <h2 style={{fontFamily:"teko",fontSize:"69px",fontWeight:'600',height:'54px'}}>GRAND - FINAL</h2>
    <h4 style={{fontFamily:"teko",fontSize:"44px",height:"44px"}}>MATCH 1 - ERANGEL</h4>
    </div>
    <div style={{display:"flex",alignItems:"center",justifyContent:'center',height:"27px",width:"378px",borderLeft:"5px solid #004e37",backgroundColor:"white"}}>
    <h6 style={{marginTop:"4px",fontFamily:"teko",fontSize:"27px"}}>PUBG MOBILE BATTLE OF THOUGHTS SEASON 01</h6>
    </div>
      </div>
    </div>
  )
}
