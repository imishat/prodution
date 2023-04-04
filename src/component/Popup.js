import React from 'react'
import { Dialog, DialogContent,DialogTitle } from '@mui/material'
import Controls from './Controls'
import CancelPresentationIcon from '@mui/icons-material/CancelPresentation';
export default function Popup(props) {
 

   
    const {title,children,openPopup,setOpenPopup} = props
  return (
    

   
   <Dialog  open={openPopup} fullWidth={true}>
  

        <DialogTitle>
          <div style={{display:'flex',justifyContent:"space-between"}}>

          <h3 style={{textDecoration:'underline'}}>{title}</h3>
          <Controls.ActionButton onClick={()=>{setOpenPopup(false)}} color="error" ><CancelPresentationIcon/></Controls.ActionButton>
          </div>
        </DialogTitle>
        <DialogContent dividers >
           {children}
        </DialogContent>
        
   </Dialog>
   
   
  )
}
