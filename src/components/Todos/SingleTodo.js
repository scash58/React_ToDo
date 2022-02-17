import React from 'react'

export default function SingleTodo(props) {
  return (
    <div className="singleTodo col-md-5 m-4">
        <h3>{props.todo.Action}</h3>

        {/* {props.todo.Description !== null ?
            <p>{props.todo.Description}</p> :
            <p>No Description Provided</p>
        } */}

        <p>{new Date(props.todo.DateStarted).toLocaleDateString()}</p>

        {props.todo.DateFinished !== null ?
            <p>{new Date(props.todo.DateFinished).toLocaleDateString()}</p> :
            <p>Not finished yet...Slacker</p>
        }

        {/* <p>{props.todo.Done}</p> */}

    </div>
  )
}
