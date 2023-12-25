import React ,{useState}from "react";
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import MyVerticallyCenteredModal from "./Modal";
import{useSelector,useDispatch} from 'react-redux';
import { selectedTask,removeTaskFromList, box } from "./tasksSlice";

const Tasklist=()=>{

  const{taskList}=useSelector((state)=>state.tasks)
  const dispatch=useDispatch()
 

    const updateTask=(task)=>{
        console.log("update task")
         setModalShow(true)
         dispatch(selectedTask(task))
         console.log(task)
    }

    const deleteTask=(task)=>{
         console.log("delete task")
         dispatch(removeTaskFromList(task))
       
    }
    const [modalShow, setModalShow] = useState(false);
    


    
    const handleCheckbox12 =(i)=>{
      
    let a= taskList && taskList.map((task)=>{
      console.log("hello i am check box")
        return task.id===i ?  task.box ?{...task,box:false}:{...task,box:true} :task 
         })
         console.log(a)
         dispatch(box(a)) 
      
    }
    return(
        <div>


    <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>#</th>
          <th>checkbox</th>
          <th>product name</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>

        {
          taskList && taskList.map((task,index)=>{
              return( 
              <tr key={task.id}>
                <td>{index+1}</td>
                {
                  !task.box ? (
                    <>
                    <td>
                      <input type="checkbox" onClick={()=>handleCheckbox12(task.id)}></input>
                    </td>
                    <td>{task.Description} </td>
                    </>) :

                    (
                    <>
                    <td>
                    <input type="checkbox" onClick={()=>handleCheckbox12(task.id)}></input>
                    </td>
                    <td><del>{task.Description} </del></td>
                    </>)
                }
                
                <td> 
                <Button variant="primary" className="mx-3"
                
                onClick={()=>updateTask(task)}>
                  <i className="bi bi-pencil-square"></i>
                 </Button>
      
      
                <Button variant="primary"
                onClick={()=>deleteTask(task)}
                >
                  <i className="bi bi-trash3-fill"></i>
                  </Button>
                </td>
              </tr>
             )
          })
        }
       
       
      </tbody>
    </Table>


    <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
        </div>
    )
}
export default Tasklist ;
