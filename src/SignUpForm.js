import React from 'react';
import useFields from './hooks/useFields'

const SignUpForm =()=>{
    const [formData, handleChange, resetForm] =useFields({
        username: '',
        email : '',
        password : ''
    })
    const handleSubmit = e =>{
        e.preventDefault();
        resetForm();
    }
    return (
        <form onSubmit={handleSubmit}>
            <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            placeholder="username"
            />
        </form>
    )
}

export default SignUpForm.js