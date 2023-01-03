import React from 'react'
import { useSelector } from 'react-redux'



export default function Navbar() {
    const taskobj=useSelector(store=>store)
  return (
      <div>
      <h1>Redux TodoList, Total Tasks remained:{taskobj.taskitems.length}</h1>
      </div>
  )
}

