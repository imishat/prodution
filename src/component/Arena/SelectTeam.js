import React from 'react'
import { useContext,useEffect,useState } from 'react'
import AddteamContext from '../../context/AddteamContext/AddteamContext'
import TeamList from './TeamList'
export default function SelectTeam() {
    const context = useContext(AddteamContext)
    const { Addteam,getTeams,SelectTeams,SelectedTeam} = context
    useEffect(() => {
     getTeams()
   }, [])
   const [Teams, setTeams] = useState("")
   const onChange=(e)=>{
     const {value,checked} = e.target
     if(checked)
     {
       setTeams([...Teams,value])
     }
     else
     setTeams(Teams.filter((e)=> e!==value))
   }
   const onClick=()=>{
    SelectTeams(Teams)
   console.log(SelectedTeam)
   }
  return (
    <div style={{marginLeft:"80px",marginTop:"20px"}}>
    {Addteam.length===0? "NO TEAMS":
    Addteam.map((tn)=>{
      return <TeamList Addteam={tn} onChange={onChange}  />
    })

}
<button onClick={onClick}
          type="submit"
          class="btn btn-primary mt-2"
        >
          Submit
        </button>
    </div>
   
  )
}
