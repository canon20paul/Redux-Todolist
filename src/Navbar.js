import React from 'react'
import { useSelector } from 'react-redux'



export default function Navbar() {
    const taskobj=useSelector(store=>store)
  return (
      <div className='justify-content-center mx-auto mt-2' style={{backgroundColor:'white', width:'90%', borderRadius:'10px'}}>
      <h1>Redux TodoList, Total Tasks remained:{taskobj.taskitems.length}</h1>
      </div>
  )
}

