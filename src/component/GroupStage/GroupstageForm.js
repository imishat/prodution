import React from 'react'
import { useState } from 'react'
import GroupstageContext from '../../context/GroupstageContext/GroupstageContext'
import { useContext } from 'react'
export default function GroupstageForm(props) {
    const context = useContext(GroupstageContext)
    const {addGroup}=context
    const [group, setgroup] = useState("")
    const handleClick=(e)=>{
        e.preventDefault()
        console.log(group)
        addGroup(props.t_id,group.title,group.total_matches)
    }
    const onChange=(e)=>{
    setgroup({...group,[e.target.name]:e.target.value})
    }
  return (
    <div className='container my-3'>
    <h3 >Add Group Stage</h3>
  <form >

  

  <div class="form-group ">
    <label for="exampleInputPassword1">Group Stage</label>
    <input type="text" class="form-control" onChange={onChange} id="title" name='title' placeholder="Group Stage"/>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword2"> No. Of Match</label>
    <input type="number" class="form-control"  onChange={onChange} id="total_matches" name='total_matches' placeholder="No. Of Match"/>
  </div>
  
<button type="submit" onClick={handleClick} class="btn btn-primary mt-2">Submit</button>
</form>
  </div>
  )
}
