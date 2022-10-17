import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/UserContext';
import './Login.css';

const Login = () => {
    const { logIn } = useContext(AuthContext);
    const [successMsg, setSuccessMsg] = useState('');
    const [errorMsg, setErrorMsg] = useState('');

    const handleSubmitLogin = event => {
        event.preventDefault();
        setSuccessMsg('');
        setErrorMsg('');

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        logIn(email, password)
            .then(result => {
                setSuccessMsg("Login Successfully");
            })
            .catch(error => setErrorMsg(error.message));
    }

    return (
        <form onSubmit={handleSubmitLogin} className='form-container'>
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
            <p className='success-msg'>{successMsg}</p>
            <p className='error-msg'>{errorMsg}</p>
        </form>
    );
};

export default Login;