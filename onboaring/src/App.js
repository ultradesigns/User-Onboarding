import React, {useState, useEffect} from 'react';
import * as yup from 'yup';
import axios from 'axios';
import formSchema from './validation/formSchema';
import User from './components/User';
import Form from './components/Form';
import './App.css';

const initialFormValues = {
   // Text 
   fname: '',
   lname: '',
   email: '',
   password: '',
   role: '',
   // checkbox
   terms: false, 
}

const initialFormErrors = {
  fname: '',
  lname: '',
  email: '',
  password: '',
  role: '',
}

const initialUsers = []
const initialDisabled = true

function App() {
// State
const [users, setUsers] = useState(initialUsers)
const [formValues, setFormValues] = useState(initialFormValues)
const [formErrors, setFormErrors] = useState(initialFormErrors)
const [disabled, setDisabled] = useState(initialDisabled)

const getUsers = () => {
  axios.get('https://reqres.in/api/users')
  .then((res) => {
    console.log(res.data);
    setUsers(res.data);
  })
  .catch((err) => {
    console.log(err);
    debugger;
  })
}

const postNewUser = (newUser) => {
  axios.post('https://reqres.in/api/users', newUser)
  .then((res) => {
    console.log(res.data);
    setUsers([res.data, ...users]);
    setFormValues(initialFormValues);
  })
  .catch((err) => {
    console.log(err);
    debugger;
  })
}

const inputChange = (name, value) => {
  yup
  .reach(formSchema, name)
  .validate(value)
  .then(() => {
    setFormErrors({
      ...formErrors, [name]: ''
    });
  })
  .catch((err) => {
    setFormErrors({
      ...formErrors, [name]: err.errors[0],
    });
  });

  setFormValues({
    ...formValues, [name]: value,
  });
};

const formSubmit = () => {
  const newUser = {
    fname: formValues.fname.trim(),
    lname: formValues.lname.trim(),
    email: formValues.email.trim(),
    password: formValues.password.trim(),
    role: formValues.role.trim(),
    terms: formValues.terms
  }

  postNewUser(newUser);
  
}

useEffect(() => {
  formSchema.isValid(formValues).then((valid) => {
    setDisabled(!valid);
  })
}, [formValues]);

  return (
    <div className="App">
      <form className="Formstyles">
        <header className="Heading">
          <h1>Let's get started</h1>
        </header>

      <Form
        values={formValues}
        update={inputChange}
        submit={formSubmit}
        disabled={disabled}
        errors={formErrors}
        />

        {users.map((user) => {
          return <User key={user.id} userInfo={user} />;
        })}
      </form>
     
    </div>
  );
}

export default App;