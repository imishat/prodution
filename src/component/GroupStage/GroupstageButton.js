import React from 'react'
import Controls from '../Controls'
import  Popup from '../Popup'
import AddIcon from '@mui/icons-material/Add';
import { useState } from 'react';
import GroupstageForm from './GroupstageForm';


export default function GroupstageButton(props) {
    let divstyle = {
        padding: '10px',
        position: "absolute",
        right: "10px",
      }
      const[openPopup,setOpenPopup] = useState(false)
  return (
    <>
    
    <div>
      <div style={divstyle}>
      <Controls.Button text="Add Group" title="ADD GROUP DETAILS" variant="contained" startIcon={<AddIcon /> }
      onClick={()=> setOpenPopup(true)} />
    </div>
    </div>
      <Popup title="ADD GROUP DETAILS"
      openPopup ={openPopup}
      setOpenPopup={setOpenPopup}
      >
        <GroupstageForm t_id ={props.t_id}  />
    </Popup>
        </>
  )
}