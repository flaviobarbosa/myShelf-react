import React, { createContext, ReactNode, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { api } from '../utils/api';

const firebaseApiKey = import.meta.env.VITE_FIREBASE_API_KEY;

interface AuthContextProps {
  user: string | null;
  signIn: (email: string, password: string) => Promise<void>;
}

export const AuthContext = createContext<AuthContextProps | null>(null);

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {

  const [user, setUser] = useState(null);

  const navigate = useNavigate();

  const signIn = async (email:string, password:string) => {
    api.post(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${firebaseApiKey}`, {
      email,
      password,
      returnSecureToken: true
    })
      .then(response => {
        setUser(response.data);
        navigate('/home');
      });
  };

  return (
    <AuthContext.Provider value={{user, signIn}}>
      {children}
    </AuthContext.Provider>
  );
};
