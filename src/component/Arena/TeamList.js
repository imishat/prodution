import React from 'react';
export default function TeamList(props) {
  return (
    <div class="form-check">
    <input class="form-check-input" onChange={props.onChange}  type="checkbox" value={props.Addteam.teamName} id="flexCheckDefault"/>
    <label class="form-check-label" for="flexCheckDefault">
      {props.Addteam.teamName}
    </label>
    
  </div>
  
  )
}
