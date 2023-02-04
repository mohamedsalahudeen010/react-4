import React, { useState } from "react"
import './App.css';
import StudentsList from "./components/students";

import WelcomePage from "./components/WelcomePage";
import EditStudent from "./components/s-editStudent";

import AddStudentPage from "./components/S.addStudent";
import { Route, Switch } from "react-router-dom";
import { studentData } from "./data/studentsData";

import 'bootstrap/dist/css/bootstrap.min.css';

import ViewStudent from "./components/v.student";
import NoPage from "./components/noPage";
import AuthPage from "./components/authPage";


function App() {
  const [studentsData,setStudentsData]=useState(studentData);
 


  return (
    <div className="App">
     <Switch>

      <Route exact path="/">
      <AuthPage/>
      </Route>

      <Route path="/home">
      <WelcomePage/>
      </Route>

      <Route path="/students">
      <StudentsList
      studentsData={studentsData}
      setStudentsData={setStudentsData}
      />
      </Route>
      
      

      <Route path="/edit-student/:id">
      <EditStudent
       studentsData={studentsData}
       setStudentsData={setStudentsData}/>
      </Route>

    
      <Route path="/view-student/:id">
      <ViewStudent
       studentsData={studentsData}
       setStudentsData={setStudentsData}/>
      </Route>

      

      <Route path="/add-student">
      <AddStudentPage
      studentsData={studentsData}
      setStudentsData={setStudentsData}
       />
      </Route>

      

      <Route path="**">
      <NoPage></NoPage>
      </Route>
     </Switch>
      
      
      
    </div>
  );
}

export default App;
