import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/UserContext';
import './Signup.css';

const SignUp = () => {
    const { createUser } = useContext(AuthContext);
    const [successMsg, setSuccessMsg] = useState('');
    const [errorMsg, setErrorMsg] = useState('');

    const handleSubmitSignUp = event => {
        event.preventDefault();
        setSuccessMsg('');
        setErrorMsg('');

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const confirm = form.confirm.value;

        if (password.length < 6) {
            setErrorMsg('Password should be minimum 6 characters.');
            return;
        }
        if (password !== confirm) {
            setErrorMsg("Password does not match with confirm password.");
            return;
        }

        createUser(email, password)
            .then(result => {
                setSuccessMsg("User Created Successfully");
            })
            .catch(error => setErrorMsg(error.message));
    }

    return (
        <form onSubmit={handleSubmitSignUp} className='form-container'>
            <h1 className='form-title'>Sign Up</h1>
            <div className='form-control'>
                <label htmlFor='email'>Email</label>
                <input type="email" name="email" id="email" placeholder='email' required />
            </div>
            <div className='form-control'>
                <label htmlFor='password'>Password</label>
                <input type="password" name="password" id="password" placeholder='password' required />
            </div>
            <div className='form-control'>
                <label htmlFor='confirm'>Confirm</label>
                <input type="password" name="confirm" id="confirm" placeholder='confirm' required />
            </div>
            <input className='btn-submit' type="submit" value="Sign Up" />
            <p className='create-new-account-text'>Already have an account? <Link to='/login' className='create-new-account-link'>Login</Link></p>
            <p className='success-msg'>{successMsg}</p>
            <p className='error-msg'>{errorMsg}</p>
        </form>
    );
};

export default SignUp;