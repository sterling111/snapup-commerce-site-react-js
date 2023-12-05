import React, { useState }  from 'react'
import './Login.scss'
import { Link } from 'react-router-dom'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

const Login = () => {

    const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const create = async (e) => {
    e.preventDefault();

    try {
      const auth = getAuth();

      const userCredential = await signInWithEmailAndPassword (auth, email, password);
      const user = userCredential.user;

      console.log('User created:', user);

    } catch (error) {
      console.error('Error creating user:', error.message);
    }
  };

    return (
        <div className='login'>
            <div className='login-container'>
                <h1>Login</h1>
                <div className='login-fields'>
                    <input type='email' placeholder='Email Address' />
                    <input type='password' placeholder='Password' />
                </div>
                <Link to = '/'>
                <button>Login</button>
                </Link>
                <p className='login-login'>Do not have an account?
                    <Link to='/register'>
                        <span>Sign Up</span>
                    </Link>
                </p>

            </div>
        </div>
    )
}

export default Login
