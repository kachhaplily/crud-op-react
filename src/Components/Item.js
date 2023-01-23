import {Container,IconButton } from '@mui/material'
import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { purple } from '@mui/material/colors';

const Item = ({data,i,remove,edit}) => {
  return (
    <Container sx={{ bgcolor:purple[500]}}>{data} <IconButton  variant="contained" onClick={()=>remove(i)}><DeleteIcon/></IconButton>  <IconButton  variant="contained" onClick={()=>edit(i)}> <EditIcon/></IconButton></Container>
  )
}

export default Item