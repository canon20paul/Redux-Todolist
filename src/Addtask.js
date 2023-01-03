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
      
      <div className='row justify-content-center'>
              <div className='col-md-6 p-3' style={{ backgroundColor: 'white', borderRadius:'10px' }}>
              <h1>Addtask Component</h1>

        <input type="text" className='form-contro w-75' style={{display:'inline'}} value={taskname} onChange={(e)=>{setTaskname(e.target.value)}} placeholder='Tasknames'/>
        <button className='btn btn-success' onClick={addtask}>ADD TASK</button>

        </div>
      </div>

      </div>
  )
}
