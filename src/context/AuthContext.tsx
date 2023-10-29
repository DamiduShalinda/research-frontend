import React, { createContext, useState, useEffect, FC } from 'react';
import { LoginData } from '../models/logindata';
import axios, { AxiosResponse, AxiosError } from 'axios';
import { ErrorResponse, useNavigate } from 'react-router-dom';
import { API_ROUTES } from '../apiroutes';
import { JWTResponse } from '../models/responses';
import { toast } from 'react-toastify';

interface AuthContextProps {
  token: string | null;
  updateToken: (newToken: string) => void;
  logout: () => void;
  login: (data : LoginData) => void;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

interface AuthProviderProps {
  children: React.ReactNode;
}

const AuthProvider: FC<AuthProviderProps> = ({ children }) => {

  const [token, setToken] = useState<string | null>(null);
  const [error, setError] = useState<ErrorResponse | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const savedToken = localStorage.getItem('jwtToken');
    if (savedToken) {
      setToken(savedToken);
    }
  }, []);

  const login = (data : LoginData) => {
    axios.post(API_ROUTES.login , data)
    .then((res : AxiosResponse<JWTResponse , ErrorResponse>) => {
      
      if (res.status === 200) {
        res.data.jwt && updateToken(res.data.jwt)
        navigate("/")
      }
    })
    .catch((err : AxiosError<ErrorResponse>) => {
      toast.error("Try Again");
      setError(err.response?.data || null);
    })
  }


  const updateToken = (newToken: string) => {
    setToken(newToken);
    localStorage.setItem('jwtToken', newToken);
  };

  const logout = () => {
    setToken(null);
    localStorage.removeItem('jwtToken');
  };

  return (
    <AuthContext.Provider value={{ token, updateToken, logout , login }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
