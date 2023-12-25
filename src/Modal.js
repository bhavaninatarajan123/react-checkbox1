import React,{useState,useEffect} from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import{useSelector,useDispatch} from 'react-redux';

import { updateTaskInList } from "./tasksSlice";
import { addTaskToList } from "./tasksSlice";

const  MyVerticallyCenteredModal=(props)=>{

  const{selectedTask}=useSelector((state)=>state.tasks)
      const[id,setId]=useState(0)
   
 const [Description,SetDescription]=useState("")


const dispatch=useDispatch()

 const updateTask=()=>{
    props.onHide()
    dispatch(updateTaskInList({id,Description}))

    console.log(id,Description)
 }
 useEffect(()=>{
     if(Object.keys(selectedTask).length !==0){
     
         SetDescription(selectedTask.Description)
       setId(selectedTask.id)
   }
    
},[selectedTask])

    return(
        <div>
            <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          update product 
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <section className="my-4">
    <Form>
      


      <Form.Group className="mb-3" controlId="formGroupPassword">
        <Form.Label>Enter the product name </Form.Label>
        <Form.Control type="text" placeholder="Enter the product name"

        value={Description}
           onChange={(e)=>SetDescription(e.target.value)}  />
      </Form.Group>

     
    </Form>
    </section>
      </Modal.Body>
      <Modal.Footer>
      <Button variant="primary" type="submit"
      
      onClick={(e)=>updateTask(e)}>
        update product
      </Button>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  </div>

    
    )
}

export default  MyVerticallyCenteredModal ;
