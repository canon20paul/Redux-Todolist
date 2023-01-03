import React from 'react'
import { useSelector } from 'react-redux'
import Todoitem from './Todoitem'


export default function Todolist() {
    const taskobj = useSelector(store=>store)

    const taskitems = taskobj.taskitems.map((task)=>{
        return(
            <Todoitem task={task} />
        )
    })

  return (
    <div>
    {taskitems}
    </div>
  )
}
