import React from 'react'

export default function TodoItem({task}) {
  return (
    <div>
    <div className='row'>
                <div className='col-md-9'>
                    <h1>{task}</h1>
                </div>
                <div className='col-md-1'>
                    <button>EDIT</button>
                </div>
              <div className='col-md-1'>
                  <button>DELETE</button>
              </div>
    </div>
    </div>
  )
}
