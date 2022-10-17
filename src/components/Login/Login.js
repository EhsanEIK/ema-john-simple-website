import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css';

const Login = () => {
    return (
        <form className='form-container'>
            <h1 className='form-title'>Login</h1>
            <div className='form-control'>
                <label htmlFor='email'>Email</label>
                <input type="email" name="email" id="email" placeholder='email' required />
            </div>
            <div className='form-control'>
                <label htmlFor='password'>Password</label>
                <input type="password" name="password" id="password" placeholder='password' required />
            </div>
            <input className='btn-submit' type="submit" value="Login" />
            <p className='create-new-account-text'>New to Ema-john? <Link to='/signup' className='create-new-account-link'>Create New Account</Link></p>
        </form>
    );
};

export default Login;