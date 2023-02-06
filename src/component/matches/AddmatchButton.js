import React from 'react'

import Controls from '../Controls'
import  Popup from '../Popup'
import AddIcon from '@mui/icons-material/Add';
import { useState } from 'react';
import AddmatchForm from './AddmatchForm';

export default function AddmatchButton(props) {
    let divstyle = {
        padding: '10px',
        position: "absolute",
        right: "10px",
      }
      const[openPopup,setOpenPopup] = useState(false)
  return (
    <div>
      <>
    
    <div>
      <div style={divstyle}>
      <Controls.Button text="Add MATCH" title="ADD MATCH DETAILS" variant="contained" startIcon={<AddIcon /> }
      onClick={()=> setOpenPopup(true)} />
    </div>
    </div>
      <Popup title="ADD MATCH DETAILS"
      openPopup ={openPopup}
      setOpenPopup={setOpenPopup}
      >
    <AddmatchForm g_id={props.g_id} />
    </Popup>
        </>
  )
    </div>
  )
}
