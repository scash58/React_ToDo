import React from 'react'

export default function FilterDone(props) {

  return (
    <div className="text-center mt-5">
        <button onClick={() => props.setFilterDone(false)} className="btn btn-outline-info bg-dark m-1">
            Active
        </button>
        <button onClick={() => props.setFilterDone(true)} className="btn btn-outline-info bg-dark m-1">
            Completed
        </button>
    </div>
  )
}
