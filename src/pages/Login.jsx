import { signInWithPopup, signOut } from 'firebase/auth';
import { auth, googleProvider } from '../../firebase-config.js';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { FaGoogle } from "react-icons/fa";

const Login = () => {
  const [user, setUser] = useState(null);
  const navigation = useNavigate();

  useEffect(() => {
    const fetchUser = () => {
      const user = localStorage.getItem('user');
      if (user) {
        setUser(JSON.parse(user));
      }
    };

    fetchUser();
  }, []);

  if (user) {
    navigation('/');
  }

  const handleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      localStorage.setItem('user', JSON.stringify(result.user));
      navigation('/');
      console.log('User Info: ', result.user);
    } catch (error) {
      console.error('Error during login: ', error);
    }
  };

  return (
    <div className="login-container">
      <h1 className="login-title">BabyCode</h1>
      <button className="login-button" onClick={handleLogin}>
        Login with {" "}
        <FaGoogle size={20} />
      </button>
        <div className='login-bg-1'></div>
        <div className='login-bg-2'></div>
    </div>
  );
};

export default Login;