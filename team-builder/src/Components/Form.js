import React from "react";

export default function TeamForm(props){
    const { values, update, submit } = props

const onChange = evt => {
   
    const {value , name} = evt.target;
    update(name,value);
}
const onSubmit = evt => {
    evt.preventDefault()
    submit()
}
return (
<form className = 'form container' onSubmit = {onSubmit}>
<div className = 'form inputs'>
    <label>Username
    <input
name ='username'
type = 'text'
placeholder =  'What is your name?'
maxLength = '30'
value =  {values.name}
onChange = {onChange}

/>
</label>

    <label>Email
    <input
name ='email'
type = 'email'
placeholder =  'What is your email?'
value =  {values.email}
onChange = {onChange}

/>
</label>



<label>Role
<select value = {values.role} name ='role' onChange = {onChange}>
<option value = "">---Select a Role ---</option>
<option value = 'Frontend'>Frontend</option>
<option value = 'Backend'>Backend</option>
<option value = 'Data-Science'>Data Science</option>
          </select>
</label>
<div className='submit'>
          <button>submit</button>
        </div>
</div>







</form>
)}




