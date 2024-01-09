import React, { useContext, useState, useEffect } from 'react';
import './Login.scss';
import { Link, useNavigate } from 'react-router-dom';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { UserContext } from '../UserContext';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const user = useContext(UserContext);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const auth = getAuth();
      await signInWithEmailAndPassword(auth, email, password);
      setError(null); // Reset error state
      navigate('/'); // Redirect to "/" after successful login
    } catch (error) {
      setError(`Error logging in: ${error.message}`);
      console.error('Error logging in:', error.message);
    }
  };

  useEffect(() => {
    if (user !== null) {
      navigate('/logout');
    }
  }, [navigate, user]);

  return (
    <div className="login">
      <div className="login-container">
        <h1>Login</h1>
        <div className="login-fields">
          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button onClick={handleLogin}>Login</button>
        {user ? (
          <div className="user-info">
            <p>User information:</p>
            <pre>{JSON.stringify(user, null, 2)}</pre>
          </div>
        ) : (
          <p className="login-login">
            Do not have an account?
            <Link to="/register">
              <span>Sign Up</span>
            </Link>
          </p>
        )}
        {error && (
          <div className="error" style={{ color: 'red', justifyContent: 'center' }}>
            {error}
          </div>
        )}
      </div>
    </div>
  );
};

export default Login;

