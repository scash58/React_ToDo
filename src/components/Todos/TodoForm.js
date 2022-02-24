import React, {useState, useEffect} from 'react'
//Formik is the tool that will build the form and keep track of what the user types into that form
import {Formik, Form, Field } from 'formik'
import { todoSchema } from '../../Utilities/validationSchema'
import axios from 'axios'

export default function TodoForm(props) {
    //Create a React Hook that will capture the categories from the API so we can use them to populate the select element for our form.
    const [categories, setCategories] = useState([]);

    //Copied for Categories.js - this will populate our categories Hook
    const getCategories =() => {
        axios.get('http://todoapi.scott-cashion.com/api/categories/').then (response => {
          setCategories(response.data)
        })
      }

    const handleSubmit = (values) => {
        console.table(values)
        //IF a prop called todo has been passed in, then we assume the form should utilize edit functionaliy. otherwise, we will be in create mode
        if(!props.todo){
            //Assemble a temporary todo object for the HTTP request
            const todoToCreate ={
                Action: values.Action,
                Done: false,
                CategoryId: values.CategoryId,
                DateStarted: new Date(),
                DateFinished: null
            }

            //Post to the API, .then to call props.getTodos (located in the todos.js) and props.setShowCreate(false) to close the form
            axios.post('http://todoapi.scott-cashion.com/api/todo/', todoToCreate).then(() => {
                props.getTodos();//This will request a GET http request ot our API...get all the todos again
                props.setShowCreate(false);
            })
        }
        else{
            console.log('Edit Mode');
            const todoToEdit = {
                TodoId: props.todo.TodoId,
                Action: values.Action,
                Done: props.todo.Done,
                CategoryId: values.CategoryId,
                DateStarted: props.todo.DateStarted,
                DateFinished: props.todo.DateFinished
            }

            axios.put('http://todoapi.scott-cashion.com/api/todo/', todoToEdit).then(() => {
                //get todo
                props.getTodos();
                //close the edit form
                props.setShowEdit(false);
            })
        }
    }

    //useEffect is written so the component will gather the categories as this form is loaded to the UI
    useEffect(() => {
        getCategories();
    }, []);

  return (
    <Formik
        initialValues={{
            Action: props.todo ? props.todo.Action : '',
            //Done: props.todo ? props.todo.Done : '',
            CategoryId: props.todo ? props.todo.CategoryId : ''
            //DateStarted: props.todo ? props.todo.DateStarted : '',
            // DateFinished: props.todo ? props.todo.DateFinished : ''
            
        }}
        validationSchema={todoSchema}
        onSubmit={(values) => handleSubmit(values)}
    >

        {({ errors, touched}) => (
            <Form id="todoForm">
                <div className="form-group m-3">
                    <Field name="Action" className="form-control" placeholder="Task to be compleated" />
                    {errors.Action && touched.Action ? (
                        <div className="text-danger">{errors.Action}</div>
                    ) : null}
                </div>
                {/* <div className="form-group m-3">
                    <Field name="Done" className="checkbox" />
                    {errors.Done && touched.Done ? (
                        <div className="text-danger">errors.Done</div>
                    ) : null}
                </div> */}
                <div className="form-group m-3">
                    <Field as="select" name="CategoryId" className="form-control">
                        <option value="0" disabled>[--Please Choose--]</option>
                        {/* Below we map the categories hook to an option for each category. Because we map these, we need to add a key attribute that is uniqe (ID) and a value which will capture what the user selects from the list. */}
                        {categories.map(cat => 
                                <option key={cat.CategoryId} value={cat.CategoryId}>{cat.Name}</option>
                            )}
                    </Field>
                </div>
                {/* <div className="form-group m-3">
                    <Field id="DateStarted" name="DateStarted" placeholder="Date Started dd/mm/yyyy">

                    </Field>
                </div> */}
                {/* <div className="form-group m-3">
                    <Field id="DateFinished" name="DateFinished" placeholder="dd/mm/yyyy">
                            
                    </Field>
                </div> */}
                <div className="form-group m-3">
                    <button type="submit" className="btn btn-info m-3">Submit Todo</button>
                </div>
            </Form>
        )}
    </Formik>
  )
}
