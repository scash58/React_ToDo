import React from "react";
import ReactDOM from "react-dom";
import CreateTodo from "./CreateTodo";
import Footer from "./Footer"

//The below items are imported to bring in specific testing functionalities. First are some tools that allow for shallow rendering and cleanup of data after each test. Second are tools that actually make these test function.
import {render, cleanup} from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
//npm install react-test-renderer - rendering fuctionality ../contexts/AuthContext ./Auth/Logout
import renderer from 'react-test-renderer'
import EndToEnd from '../EndToEnd'
import ShallowRender from "../ShallowRender";
import reactDom from "react-dom";

afterEach(cleanup);

it('CreateTodo - matches snapshot', () => {
    const tree = renderer.create(<CreateTodo />).toJSON();

    expect(tree).toMatchSnapshot();
})

it('Footer - renders without crashing', () => {
    const div = document.createElement('div');
    reactDom.render(<Footer></Footer>, div);
})
