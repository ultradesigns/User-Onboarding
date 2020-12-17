import React from 'react';

export default function TeamMemberForm(props) {
    const { values, update, submit, disabled, errors } = props;

    const onChange = event => {
        const { name, value, type, checked } = event.target
        const valueToUse = type === 'checkbox' ? checked :  value
        update(name, valueToUse)     }

    const onSubmit = event => {
        event.preventDefault();
        submit(); 
    }

    return (
        <form className='form container' onSubmit={onSubmit}>
            <div className='form-group inputs'>
            <h2>Welcome to Lambda</h2>
            <h3 className="RedText"><em>Apply Now!!!</em></h3>
            
            <div className='errors'>
                <div>{errors.fname}</div>
                <div>{errors.lname}</div>
                <div>{errors.email}</div>
                <div>{errors.password}</div>
                <div>{errors.role}</div>
            </div>
                <label>First Name&nbsp;</label><br></br>
                    <input className="NewLook" name='fname' type='text' placeholder='First Name' maxLength='25' value={values.fname} onChange={onChange} /><br></br>
                
                <label>Last Name&nbsp;</label><br></br>
                    <input className="NewLook" name='lname' type='text' placeholder='Last Name' maxLength='25' value={values.lname} onChange={onChange} /><br></br>
                
                <label>E-mail&nbsp;</label><br></br>
                    <input className="NewLook" name='email' type='email' placeholder='E-mail' maxLength='30' value={values.email} onChange={onChange} /><br></br>
                
                <label>Password&nbsp;</label><br></br>
                    <input className="NewLook" name='password' type='password' placeholder='Password' maxLength='20' value={values.password} onChange={onChange} /><br></br>
                
                <label>Course&nbsp;</label><br></br>
                    <select className="NewLook" name='role' value={values.role} onChange={onChange}>
                        <option value=''>Course</option>
                        <option value='Fundamentals'>Fundamentals</option>
                        <option value='Pre-work'>Pre-work</option>
                        <option value='Ux/Ui'>Ux/Ui</option>
                        <option value='Web-Dev'>Web-Dev</option>
                        <option value='Computer Science'>Computer Science</option>
                    </select>
            </div>
            <div className='form-group checkboxes'>
            <label><input name='terms' type='checkbox' checked={values.terms} onChange={onChange} />I have read and agree to the terms of service</label>
                
            </div>
            <div className='submit'>
                <button className="Looks" disabled={disabled}>Send</button>
            </div>
        </form>
    );
}