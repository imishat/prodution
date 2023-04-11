import React, { useContext } from 'react'
import { useState } from 'react'
import MatchContext from '../../context/Matchcontext/MatchContext'

export default function AddmatchForm(props) {
  const context = useContext(MatchContext)
  const  group_id = props.g_id
  const {addMatch}=context
  const [matches, setmatches] = useState("")
  const handleClick=(e)=>{
    e.preventDefault()
    // (matches)
    // (props.g_id)
    addMatch(group_id,matches.match_no,matches.time,matches.map)
}
  const onChange=(e)=>{
    setmatches({...matches,[e.target.name]:e.target.value})
    }
  return (
    <div className='container my-3'>
    <h3 >Add Group Stage</h3>
    <form>
  <div class="form-row">
    <div class="form-group col-md-6">
      <label for="inputEmail4">Match No.</label>
      <input type="number" class="form-control" id="matchno" onChange={onChange} name='match_no' placeholder="Match No."/>
    </div>
    <div class="form-group col-md-6">
      <label for="inputPassword4">TIME</label>
      <input type="time" class="form-control" onChange={onChange} id="time" name='time' placeholder="Password"/>
    </div>
  </div>
  <div class="form-row">
    <div class="form-group col-md-4">
      <label for="inputState">MAP</label>
      <select id="map" name='map' onChange={onChange} class="form-control">
        <option selected>Choose...</option>
        <option>ERANGEL</option>
        <option>MIRAMAR</option>
        <option>SHANOK</option>
        <option>VIKENDI</option>
        <option>LIVIK</option>
      </select>
    </div>
  </div>
  
  <button type="submit" onClick={handleClick} class="btn btn-primary">ADD MATCH</button>
</form>
  </div>
  )
}