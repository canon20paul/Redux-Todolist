import React,{useState} from 'react'
import { useDispatch  } from "react-redux"
import { useSelector } from "react-redux"



export default function Addtask() {

    const[taskname, setTaskname]=useState('')
    const taskobj=useSelector(store=>store)
    const dispatch=useDispatch()
    function addtask(){
        dispatch({type:'ADD_TASK', payload:taskname})
        console.log(taskobj.taskitems);
    }


  return (
      <div>
      <h1>Addtask Component</h1>
      <div className='row justify-content-center'>
        <div className='col-md-6'>
        <input type="text" className='form-contro w-75' style={{display:'inline'}} value={taskname} onChange={(e)=>{setTaskname(e.target.value)}} placeholder='Tasknames'/>
        <button className='btn btn-success' onClick={addtask}>ADD TASK</button>

        </div>
      </div>

      </div>
  )
}
