import React, {useState} from 'react'
//Edit/Delete Steps
//1.Resources.js add prop for getResources - this will update the component
//2. SingleResource.js add buttons for edit and delete - optionally add FontAwesomeIcons
//3. Wire up the delete function in SingleResource
//4. Create the ResourceEdit.js
//5. Conditionally render ResourceEdit below - we create a React Hook for the editForm called showEdit
//6. Configure the ResourceForm to incorporate Edit functionality
//7. Lock down the Edit and Delete buttons in SingleResource - currentUser functionality

//imports for FontAwesome icons
/*
  npm i --save @fortawesome/fontawesome-svg-core
  npm install --save @fortawesome/free-solid-svg-icons
  npm install --save @fortawesome/react-fontawesome
*/
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios'
import TodoEdit from './TodoEdit'
import { useAuth} from '../../contexts/AuthContext'

//initialize the Font Awesome library in this file
library.add(fas)

export default function SingleTodo(props) {
  //React hook - will show/hide the edit form
  const [showEdit, setShowEdit] = useState(false);
  const {currentUser} =  useAuth();

  const deleteTodo = (id) => {
    //Check with the user to ensure they want to delete the resource...upon the user clicking ok, make a request otht eAPI to delete that resource, and then we will get our resources from the API to reflect the change.
    if(window.confirm(`Are you sure you want to delete ${props.todo.Action}?`)){
      //we neet to import axios into this component so we can make a request ot the API
      axios.delete(`http://todoapi.scott-cashion.com/api/todo/${id}`).then(() => {props.getTodos()})
    }
  }

  return (
    <div className="singleTodo col-md-5 m-4">
      {currentUser.email === 'scashion58@gmail.com' &&
        <div>
          <button id="editLink" onClick={() => setShowEdit(true)}>
            <FontAwesomeIcon icon={['fas', 'edit']} />
          </button>
          <button id="deleteLink" onClick={() => deleteTodo(props.todo.TodoId)}>
            <FontAwesomeIcon icon={['fas', 'trash-alt']} />
          </button>
          
          {showEdit &&
            <TodoEdit
              todo={props.todo}
              showEdit={showEdit}
              setShowEdit={setShowEdit}
              getTodos={props.getTodos}
            />
          }
        </div>
      }

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
