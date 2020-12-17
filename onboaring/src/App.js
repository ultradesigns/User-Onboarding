import React, { useState } from "react";
import logo from './logo.svg';
import Form from "./components/Form";
import './App.css';
import axios from 'axios';

// Name
// - [ ] Email
// - [ ] Password
// - [ ] Terms of Service (checkbox)
// - [ ] A Submit button to send our form data to the server.

const initialFormValues = {
  ///// TEXT INPUTS /////
  username: '',
  email: '',
  password: "",
  ///// CHECKBOXES /////
  terms: false,
}

const initialFormErrors = {
  username: '',
  email: '',
  role: '',
  
}
const initialForms = []
const initialDisabled = true

export default function App() {
  const [forms, setForms] = useState(initialForms)          // array of form objects
  const [formValues, setFormValues] = useState(initialFormValues) // object
  const [formErrors, setFormErrors] = useState(initialFormErrors) // object
  const [disabled, setDisabled] = useState(initialDisabled)       // boolean
  
  const getForms = () => {
    axios
    .get("https://reqres.in/api/users")
    .then((res) =>{
      console.log(res);
      setForms(res.data);
    }) 
     .catch((err) => {
       console.log(err);
       debugger;
     }) 
  }

  const inputChange = () => {

  }

  const formSubmit = () => {

  }

  
  return (
    <div className="App">
      <header className="App-header">
      <Form
        values={formValues}
        change={inputChange}
        submit={formSubmit}
        disabled={disabled}
        errors={formErrors}
      />
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}


