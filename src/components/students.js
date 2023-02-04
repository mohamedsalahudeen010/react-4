import React from "react"
import BasePage from "./base"
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { useHistory } from "react-router-dom";


const StudentsList=( {studentsData,setStudentsData})=>{
    const history=useHistory();

    const deleteStudent=(id)=>{
        const removeStudent= studentsData.filter((stud,idx)=>(idx!==id));
        setStudentsData(removeStudent)
       }

    return(
<BasePage
title="Welcome to Hogwards"
description="Here We have Data of Students of Hogwards">
    <div className="card-containers"> 
<div className="row"> 

      {studentsData.map((stu,idx)=>(

<div className="col-lg-3 col-md-4 col-sm-6 " key={idx}> 

<div className="card-main">

      <Card.Img variant="top" className="img" src={stu.image} />
      <Card.Body>
        <Card.Title>{stu.name}</Card.Title>
     <ButtonGroup className="ButtonGroup">
     <Button variant="secondary" onClick={()=>history.push(`/edit-student/${idx}`)}>Edit</Button>
        <Button variant="danger" color="warning" onClick={()=>deleteStudent(idx)}>Delete</Button>
        <Button variant="info" onClick={()=>history.push(`/view-student/${idx}`)}>View Student</Button>
     </ButtonGroup>
    
      </Card.Body>
    
    </div>
        </div>
       

      ))}   
      </div>
</div>

</BasePage>
    )
}


export default StudentsList