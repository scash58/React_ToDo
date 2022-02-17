import React from 'react';
//Step 1 - accessing user info
import { useAuth } from '../../contexts/AuthContext';
import { Container, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

export default function Login() {
    //Step 2 - create a variable to house the context's functionality in this component
    const {authenticate} = useAuth();
    const navigate = useNavigate();

    async function handleAuth(){
        await authenticate(); //await keyword functions like then()
        return navigate("/resources")
    }

  return (
      <div className="login">
          <article className="bg-info mb-5 p-5 text-dark">
              <h1 className="text-center">Welcome to ResourcePlus</h1>
          </article>
          <Container>
              <Card className="m-2 border-dark text-center">
                <Card.Header className="bg-dark text-white">
                    <h2>Login for full fuctionality</h2>
                </Card.Header>
                <Card.Body>
                    {/* Step 3 - call the function as a part of a button */}
                    <button onClick={() => handleAuth()} className="btn btn-dark">Login w/ GitHub</button> 
                </Card.Body>
              </Card>
          </Container>
      </div>
  );
}
