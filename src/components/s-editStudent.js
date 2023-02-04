import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import BasePage from "./base";
import { Button, TextField } from '@mui/material';


const EditStudent=({studentsData,setStudentsData})=>{
    const history = useHistory();
    const {id} = useParams();
    const student = studentsData[id]
    const [editId, setEditId] = useState("");
    const [idx, setIdx] = useState("");
    const [name, setName] = useState("");
    const [species, setSpecies] = useState("");
    const [gender, setGender] = useState("");
    const [house, setHouse] = useState("");
    const [dob, setDob] = useState("");
    const [wand, setWand] = useState("");
    const [image, setImage] = useState("");
    

useEffect(()=>{
    setEditId(student.id);
    setIdx(student.id)
    setName(student.name)
    setSpecies(student.species)
    setGender(student.gender)
    setHouse(student.house)
    setDob(student.dateOfBirth)
    setWand(student.wand)
    setImage(student.image)
},[])


const updateStudentData = () =>{

    const studentIndex=studentsData.findIndex((stud)=>stud.id===editId)

  const updatedData={
        id,
        name,
        species,
        gender,
        house,
        dateOfBirth:dob,
        wand,
        image
    }

    studentsData[studentIndex]=updatedData;

    setStudentsData([...studentsData]);

    setEditId("");
    setIdx("")
    setName("")
    setSpecies("")
    setGender("")
    setHouse("")
    setDob("")
    setWand("")
    setImage("")

    history.push("/students")
}
    return(
        <BasePage
        title = "Edit A Student"
        description= "You can a Edit a student data here"
        >
        
<div className="input-section">
     
        
     <TextField 
     fullWidth label="Enter the id" 
     onChange={(event)=>setIdx(event.target.value)}
     value = {idx}
     id="fullWidth" />

     <TextField 
     fullWidth 
     label="Enter the Name"
     onChange={(event)=>setName(event.target.value)}
     value= {name}
      id="fullWidth" />

     <TextField 
     fullWidth 
     label="Enter the Species"
     onChange={(event)=>setSpecies(event.target.value)}
     value = {species}
      id="fullWidth" />

     <TextField 
     fullWidth 
     label="Enter the Gender"
     onChange={(event)=>setGender(event.target.value)}
     value = {gender}
      id="fullWidth" />

     <TextField 
     fullWidth 
     label="Enter the House"
     onChange={(event)=>setHouse(event.target.value)}
     value = {house}
      id="fullWidth" />

<TextField 
     fullWidth 
     label="Enter Date of Birth"
     onChange={(event)=>setDob(event.target.value)}
     value = {dob}
      id="fullWidth" />

<TextField 
     fullWidth 
     label="Enter the Wand Type"
     onChange={(event)=>setWand(event.target.value)}
     value = {wand}
      id="fullWidth" />

<TextField 
     fullWidth 
     label="Enter a Image"
     onChange={(event)=>setImage(event.target.value)}
     value = {image}
      id="fullWidth" />
 
        <Button
          className="add-btn"
          color="secondary"
          variant="contained"
          onClick={updateStudentData }
        >
          Update Data
        </Button>


   </div>

   
         
        </BasePage>
    )
}



export default EditStudent