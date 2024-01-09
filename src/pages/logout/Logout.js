import React, { useContext } from 'react';
import {useNavigate } from 'react-router-dom';
import { getAuth, signOut } from 'firebase/auth';
import { UserContext } from '../UserContext';

const Logout = () => {
  const user = useContext(UserContext);
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      const auth = getAuth();
      await signOut(auth);
      navigate('/login');
    } catch (error) {
      console.error('Error logging out:', error.message);
    }
  };

  return (
    <div>
      <div className="logout-container">
        <button onClick={handleLogout}>Logout</button>
      </div>
    </div>
  );
};

export default Logout;
