import {createContext, useEffect, useState} from 'react';
import axios from 'axios';

const AuthContext = createContext({
  isLoggedIn: false,
  onLogout: () => {},
  onLogin: (email, password) => {},
});

export const AuthContextProvider = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const storedUserLoggedIn = localStorage.getItem('isLoggedIn');
    if (storedUserLoggedIn) {
      setIsLoggedIn(true);
    }
  }, []);

  const logoutHandler = () => {
    localStorage.removeItem('isLoggedIn');
    setIsLoggedIn(false);
  };

  const loginHandler = async (email, password) => {
    try {
      const result = await axios.post('http://localhost:8080/api/auth/login', {
        email,
        password,
      });
      console.log(result.data);
      if (result.data.accessToken) {
        localStorage.setItem('isLoggedIn', 'true');
        setIsLoggedIn(true);
      }
    } catch (error) {
      alert('Sai tài khoản hoặc mật khẩu');
    }
  };
  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: isLoggedIn,
        onLogout: logoutHandler,
        onLogin: loginHandler,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
