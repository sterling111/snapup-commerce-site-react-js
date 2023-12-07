import React, { useState } from 'react';
import './Login.scss';
import { Link, useNavigate } from 'react-router-dom';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null)
  const navigate = useNavigate()

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const auth = getAuth();
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      setError(false)
      navigate('/')

      console.log('User logged in:', user);
    } catch (error) {
      setError('Error logging in:')
      console.error('Error logging in:', error.message);
    }
  };


  return (
    <div className='login'>
      <div className='login-container'>
        <h1>Login</h1>
        <div className='login-fields'>
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
        </div>
        <button onClick={handleLogin}>Login</button>
        {error && <div className='error' style={{color: 'red', justifyContent: 'center'}}>{error}</div>}
        <p className='login-login'>
          Do not have an account?
          <Link to='/register'>
            <span>Sign Up</span>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;

