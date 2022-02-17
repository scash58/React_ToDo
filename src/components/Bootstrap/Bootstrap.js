import React from 'react';
import './Bootstrap.css'
//Install a package from npm that will render Bootstrap enabled HTML when we call to the components from react-bootstrap - npm install react-bootstrap
import {Container, Row, Col, Carousel, Accordion} from 'react-bootstrap'

//images to import
import image from '../../images/background.jpg'
import image2 from '../../images/background2.jpg'
import image3 from '../../images/background3.jpg'

export default function Bootstrap() {
  return (
      <section className='bootstrap'>
          <main>
              {/* Below we use the Carousel component from react-bootstrap. This will render the HTML necessary to make a functioning carousel using bootstrap classes/html */}
              <Carousel fade controls={false}>
                  {/* Each slide is a carousel.item */}
                  <Carousel.Item>
                    <img src={image} className="d-block w-100" alt="First slide"/>
                    <Carousel.Caption>
                        <h3>First Slide</h3>
                        <p>This is a example caption</p>
                    </Carousel.Caption>
                  </Carousel.Item>
                  <Carousel.Item>
                    <img src={image2} className="d-block w-100" alt="Second slide"/>
                    <Carousel.Caption>
                        <h3>Second Slide</h3>
                        <p>This is a example caption</p>
                    </Carousel.Caption>
                  </Carousel.Item>
                  <Carousel.Item>
                    <img src={image3} className="d-block w-100" alt="Third slide"/>
                    <Carousel.Caption>
                        <h3>Third Slide</h3>
                        <p>This is a example caption</p>
                    </Carousel.Caption>
                  </Carousel.Item>
              </Carousel>
              <br/>
              <Container>
                  <Row>
                      <Col md={{span: 8, offset: 2}}>
                          <Accordion>
                              <Accordion.Item eventKey='0'>
                                  <Accordion.Header>
                                    <h4>Step 1 - Install the react-bootstrap package</h4>
                                  </Accordion.Header>
                                  <Accordion.Body>
                                    <p>npm install react-bootstrap bootstrap@5.1.3</p>
                                  </Accordion.Body>
                              </Accordion.Item>
                              <Accordion.Item eventKey='1'>
                                  <Accordion.Header>
                                    <h4>Step 2 - Import the components you are using</h4>
                                  </Accordion.Header>
                                  <Accordion.Body>
                                    <p>
                                        <a href="https://react-bootstrap.github.io" target="_blank" rel="noreferrer">Visit here for the docs</a>
                                    </p>
                                  </Accordion.Body>
                              </Accordion.Item>
                              <Accordion.Item eventKey='2'>
                                  <Accordion.Header>
                                    <h4>Step 3 - Call to the components in the render</h4>
                                  </Accordion.Header>
                                  <Accordion.Body>
                                    <p>
                                        Using the code examples from their docs, call to the components as needed to implement Bootstrap components in your UI.
                                    </p>
                                  </Accordion.Body>
                              </Accordion.Item>
                          </Accordion>
                      </Col>
                  </Row>
                  <Row className="text-center m-2">
                        <Col md={3} className="alert alert-primary">
                            <h4>col-md-3<hr />will take 3 of 12 columns in the grid</h4>
                        </Col>
                        <Col md={6} className="alert alert-danger">
                            <h4>col-md-6<hr />will take 6 of 12 columns in the grid</h4>
                        </Col>
                        <Col md={3} className="alert alert-success">
                            <h4>col-md-3<hr />will take 3 of 12 columnns in the grid</h4>
                        </Col>
                    </Row>
                    <Row className="text-center m-2">
                        <Col md={6} className="alert alert-warning">This will take half the parent's width.</Col>
                        <Col md={6} className="alert alert-info">This will take half the parent's width.</Col>
                    </Row>
              </Container>
          </main>
      </section>
  );
}
