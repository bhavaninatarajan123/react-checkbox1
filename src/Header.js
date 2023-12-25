import React from "react";

import { useSelector } from "react-redux";
import Tasklist from "./Tasklist";

const Headers=()=>{

const {taskList}= useSelector((state)=>state.tasks)

console.log(taskList)

    return(
        <div>
            <h1 className="text-primary  text-center my-4">product  Management</h1>
            <p className="text-center">{`currently ${taskList.length} product is pending`}</p>
        </div>
    )
}
export default Headers ;
