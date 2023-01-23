import React, { useState } from 'react'
import { TextField, Button } from '@mui/material'
import Item from './Item';

const Items = () => {
  const [item, setitem] = useState([]);
  const [input, setinput] = useState();
  const [edit,isedit]=useState(-1);

  const ChnageHandler = (e) => {
    setinput(e.target.value)
  }
  const Save = () => {
    const itemdata = [...item];
    if(edit!=-1){
      itemdata[edit]=input
      setitem(itemdata);
    }
    else{
      if(input !="")
      {itemdata.push(input);
      setitem(itemdata);}
    }
    setinput('')
  isedit(-1);
  }
  const Remove=(index)=>{
  const itemdata=[...item];
  itemdata.splice(index,1);
  setitem(itemdata);
  }
  const Edit=(index)=>{
    let d=[...item];
    setinput(d[index])
    isedit(index)
  }
  return (
    <>
      <TextField id="standard-basic" label="Standard" variant="standard" onChange={ChnageHandler} value={input}/>
      <Button variant="contained" onClick={Save}>Save</Button>
      {
        item.map((ele,index) => {
          return (<Item data={ele} i={index} remove={Remove} edit={Edit}/>);
        })
      }
    </>
  )
}

export default Items