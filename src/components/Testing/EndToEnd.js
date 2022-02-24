import React from 'react'
import { Col } from 'react-bootstrap'

export default function EndToEnd(props) {
    return (
        <Col md={6} className="text-left">
            <article className="border-dark border rounded p-4 m-1">
                <h2 className="text-center p-2">End-To-End Testing</h2>
                {/* The data-testid below is connected to the Button.test.js currently running a unit test for this component. We use this attribute so we can test to make sure the prop is rendering correctly without having to look in the browser. */}
                <p data-testid="paragraph1">{props.test}</p>
                <p>
                    Up to today, we have been utilizing end-to-end testing. In end-to-end testing, we run the application in the actual browser environment and test the experience from the user's perspective.
                </p>
                <h3>Key points in end-to-end testing</h3>
                <ul >
                    <li>Use npm start to launch in the browser</li>
                    <li>Hit F12 or right click to use the inspector in the browser</li>
                    <li>Use the Components tab in the inspector to find values of state data and props in the application</li>
                </ul>
                <p>In this environment, it is vital to keep in mind all of the edge cases in order to effectively test the app. Think about all the items that could fail and test them.</p>
            </article>
        </Col>
    )
}
