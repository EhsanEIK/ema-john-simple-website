import React from 'react';
import { Link } from 'react-router-dom';

const SignUp = () => {
    return (
        <form className='form-container'>
            <h1 className='form-title'>Sign Up</h1>
            <div className='form-control'>
                <label htmlFor='name'>Name</label>
                <input type="text" name="name" id="name" placeholder='name' required />
            </div>
            <div className='form-control'>
                <label htmlFor='email'>Email</label>
                <input type="email" name="email" id="email" placeholder='email' required />
            </div>
            <div className='form-control'>
                <label htmlFor='password'>Password</label>
                <input type="password" name="password" id="password" placeholder='password' required />
            </div>
            <input className='btn-submit' type="submit" value="Sign Up" />
            <p className='create-new-account-text'>Already have an account? <Link to='/login' className='create-new-account-link'>Login</Link></p>
        </form>
    );
};

export default SignUp;