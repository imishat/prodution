import React from 'react'
import { Button as Muibutton } from '@mui/material'


export default function Button(props) {
    const{text,size,color,variant,onClick,...others}=props
    return (
        <Muibutton
            variant={variant|| "contained"}
            size={size}
            color={color|| "primary"}
            onClick={onClick}
            {...others}
            >
                {text}
        </Muibutton>
  )
}
