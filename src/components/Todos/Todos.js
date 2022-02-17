import React, {useState, useEffect} from 'react';
import './Todos.css'
//We import the local data into this component so we can work with the UI before we get our remote data.
import sampleTodos from '../../Utilities/sampleTodos'
import { Container } from 'react-bootstrap';
import SingleTodo from './SingleTodo';
//Step - Create
import TodoCreate from './TodoCreate';
import { useAuth } from '../../contexts/AuthContext';

//npm install axios - tool that will manage HTTP requests to our api
import axios from 'axios'

export default function Todo() {
  //Below we create a React hook to capture our resources into an state variable. To do this we need to import useState
  const [todos, setTodos] = useState(sampleTodos);
  //const [resources, setResources] = useState([]); - This is what the Hook would need to look like if we just wanted it to remain empty until we get the data from the API.

  //Step - Create
  const [showCreate, setShowCreate] = useState(false);
  //Create functionality needs to be protected from any user and only show when the user is a specific user
  const {currentUser} = useAuth();

  //This is our function to retrieve data from the TodoAPI.
  const getTodos = () => {
    axios.get('http://localhost:63926/api/todo/').then(response => {
      setTodos(response.data);
    })
  }

  //useEffect - which will call the getTodos function as the component mounts in the UI (Virtual DOM)
  useEffect(() => {
    getTodos();
  }, []);

  return (
      <section className="todos">
        <article className="bg-primary p-5">
          <h1 className="text-center">Todos Dashboard</h1>
        </article>
        {/* Step - CREATE */}
        {currentUser.email === 'scashion58@gmail.com' &&
          <div className="bg-dark p-2 mb-3 text-center">
            <button className="btn btn-info" onClick={() => setShowCreate(!showCreate)}>
              {!showCreate ? 'Create New Todo' : 'Close Form'}
            </button>
            <div className="createContainer">
              {showCreate &&
                <TodoCreate
                  getTodos={getTodos}
                  setShowCreate={setShowCreate}
                />
              }
            </div>
          </div>
        }
        <Container>
          <article className="todoGallery row justify-content-center">
            {todos.map(x =>
              <SingleTodo 
              key={(x.TodoId)} 
              todo={x} 
              getTodos={getTodos}
              />
            )}
          </article>
        </Container>
      </section>
  );
}
