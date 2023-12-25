import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import { addTaskToList } from "./tasksSlice";
import{useDispatch} from 'react-redux'


const AddTask=()=>{

const dispatch=useDispatch()


 
 const [Description,SetDescription]=useState("")

 const AddTask1=(e)=>{
  e.preventDefault();
  console.log(Description);

  dispatch(addTaskToList({Description}))
  SetDescription("")

 }
    return(

      <div>
          <section className="my-4" >
    <Form>
        <Form.Group className="mb-3" controlId="formGroupPassword">
            <Form.Label>Enter The product name </Form.Label>
            <Form.Control type="text" placeholder="Enter The product name"  value={Description}
           onChange={(e)=>SetDescription(e.target.value)}  />
        </Form.Group>

        <Button variant="primary" type="submit" onClick={(e)=>AddTask1(e)}> New task</Button>
    </Form>
    </section>
    </div>
    )
}
export default AddTask;