import React from 'react'
import { useState,useEffext } from 'react'
import { Form } from 'react-bootstrap'
import  Popup from './Popup'
import Controls from './Controls'
import AddIcon from '@mui/icons-material/Add';
import Tournament from './Tournament'




let divstyle = {
  padding: '10px',
  position: "absolute",
  right: "10px",
}


    
export default function Tounamentforms(props) {
    const[openPopup,setOpenPopup] = useState(false)
  return (
    
    <>
        <div style={divstyle}>
      <Controls.Button text="Add Tournament" variant="contained" startIcon={<AddIcon /> }
      onClick={()=> setOpenPopup(true)} />
    </div>

    
    <Popup
      openPopup ={openPopup}
      setOpenPopup={setOpenPopup}
    >
     <Tournament addtodo={props.addtodo}/>
    </Popup>
     </>
  )
}
