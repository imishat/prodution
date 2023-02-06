import React from 'react'
import {Button} from '@mui/material'
export default function ActionButton(props) {
    
    const {color,children,onClick,variant} = props
  return (
    <Button
        variant= {variant|| "contained" }
        color={color}
        onClick={onClick}
    >
        {children}
    </Button>
  )
}
