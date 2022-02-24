//Step 1 - Read - Creat Categories component, pay attention ot the imports
import React, {useState, useEffect} from 'react';
import { Container } from 'react-bootstrap';
import sampleCategories from '../../Utilities/sampleCategories'
import './Categories.css';
import SingleCategory from './SingleCategory';
import axios from 'axios';
//Step - Create
import {useAuth} from '../../contexts/AuthContext'
import CatCreate from './CatCreate';

export default function Categories() {
  //Step 2 - Read - Create the Hook
  const [categories, setCategories] = useState(sampleCategories);
  //Step - Create
  const [showCreate, setShowCreate] = useState(false);
  const {currentUser} = useAuth();

  //Step 4 - Inject data into the component
  const getCategories = () => {
    axios.get('http://todoapi.scott-cashion.com/api/categories/').then (response => {
      setCategories(response.data)
    })
  }

  useEffect(() => {
    getCategories();
  }, []);

  //Step 3 - Read - Create the UI
  return (
      <section className="categories">
        <article className="bg-primary p-5">
          <h1>Categories Dashboard</h1>
        </article>
        {currentUser.email === 'scashion58@gmail.com' &&
            <div className="bg-dark p-2 mb-3 text-center">
              {showCreate ? 
                <>
                  <button onClick={() => setShowCreate(false)} className="btn btn-warning">Cancel</button>
                  <CatCreate getCategories={getCategories} setShowCreate={setShowCreate} />
                </> : 
                <button onClick={() => setShowCreate(true)} className="btn btn-info">Create New Category</button>
              }
            </div>
        }
        <Container>
          <table className="table table-striped table-bordered table-light mt-3 mb-3">
              <thead className="bg-primary text-uppercase">
                <tr>
                  <th>Name</th>
                  <th>Description</th>
                  {currentUser.email === 'scashion58@gmail.com' &&
                    <th>Actions</th>
                  }
                </tr>
              </thead>
            <tbody>
              {categories.map(x =>
                  <SingleCategory 
                    key={x.CategoryId} 
                    category={x} 
                    getCategories={getCategories}
                  />
                )}
            </tbody>
          </table>
        </Container>
      </section>
  );
}
