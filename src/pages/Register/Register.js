import React, { useState } from 'react';
import './Register.scss';
import { Link, useNavigate } from 'react-router-dom';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { auth as ath } from '../../Firebase';


const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState(null)
  const navigate = useNavigate()

  const create = async (e) => {
    e.preventDefault();

    try {
      const auth = ath` `

      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      setError(false)
      navigate('/login')

      console.log('User created:', user);

    } catch (error) {
      setError('Error creating user')
      console.error('Error creating user:', error.message);
    }
  };

  return (
    <div className='register'>
      <div className='register-container'>
        <h1>Register</h1>
        <div className='register-fields'>
          <input
            type='email'
            placeholder='Email Address'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type='password'
            placeholder='Password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            type='password'
            placeholder='Confirm Password'
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
        <button onClick={create}>Register</button>
        {error && <div className='error' style={{ color: 'red', justifyContent: 'center' }}>{error}</div>}
        <p className='register-register'>
          Already have an account?
          <Link to='/login'>
            <span>Login In Here</span>
          </Link>
        </p>
        <div className='register-agree'>
          <input type='checkBox' name='' id='' />
          <p>By continuing, I agree to the terms of use & privacy policy.</p>
        </div>
      </div>
    </div>
  );
};

export default Register;

