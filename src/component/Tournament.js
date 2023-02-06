import { borderRadius } from '@mui/system'
import React, { useState } from 'react'
import { useContext } from 'react'
import TournamentContext from '../context/TournamentContext'

let formstyle={
  padding:"10px 10px",
  border:"2px solid blue",
   borderRadius:"20px"
}
export default function Tournament(props) {
  const context= useContext(TournamentContext)
  const {addTournament}=context
  const [tournament, settournament] = useState({name:"",url:""})
 const handleClick=(e)=>{
  e.preventDefault()
  console.log(tournament)
  addTournament(tournament.name,tournament.url);
 }
 const onChange=(e)=>{
    settournament({...tournament,[e.target.name]:e.target.value})
 }
  return (
    <div style={formstyle} className='container my-3'>
    <h3 >ADD TOURNAMENT</h3>
  <form >

  

  <div class="form-group ">
    <label for="exampleInputPassword1">Tournamenet Name</label>
    <input type="text" class="form-control" onChange={onChange} id="name" name='name' placeholder="Tournament Name"/>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword2"> Tournament Logo Url</label>
    <input type="text" class="form-control"  onChange={onChange} id="url" name='url' placeholder="Url"/>
  </div>
  
<button type="submit" onClick={handleClick} class="btn btn-primary mt-2">Submit</button>
</form>
  </div>
  )
}


