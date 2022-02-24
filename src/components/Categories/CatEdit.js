import React from 'react'
import { Modal } from 'react-bootstrap'
import CatForm from './CatForm'

export default function CatEdit(props) {
    return (
        <Modal show={props.showEdit} onHide={() => props.setShowEdit(false)} size="lg">
            <Modal.Header closeButton>
                <h2>Editing {props.category.Name}</h2>
            </Modal.Header>
            <Modal.Body>
          
            <CatForm category={props.category}
                    setShowEdit={props.setShowEdit}
                    getCategories={props.getCategories} /> 
            </Modal.Body>
        </Modal>
    )
}
