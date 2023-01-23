import React, { createContext, ReactNode, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { api } from '../utils/api';

interface UserProps {
  kind: string;
  localId: string;
  email: string;
  displayName: string;
  idToken: string;
  registered: boolean;
  refreshToken: string;
  expiresIn: string;
}

interface AuthContextProps {
  user: UserProps | null;
  signIn: (email: string, password: string) => Promise<void>;
}

interface AuthProviderProps {
  children: ReactNode;
}

const firebaseApiKey = import.meta.env.VITE_FIREBASE_API_KEY;
const LOCALSTORAGE_USER = '@shelf:user';

export const AuthContext = createContext<AuthContextProps | null>(null);

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {

  const [user, setUser] = useState<UserProps | null>(null);

  const navigate = useNavigate();

  const persistUser = (user: UserProps) => {
    localStorage.setItem(LOCALSTORAGE_USER, JSON.stringify(user));
  };

  const getUser = () => {
    return localStorage.getItem(LOCALSTORAGE_USER);
  };

  useEffect(() => {
    const persistedUser = getUser();

    if(persistedUser && persistedUser !== JSON.stringify(user))
      setUser(JSON.parse(persistedUser));

  }, [user]);

  const signIn = async (email: string, password: string) => {
    api.post(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${firebaseApiKey}`, {
      email,
      password,
      returnSecureToken: true
    })
      .then(response => {
        const user = response.data;
        setUser(user);
        persistUser(user);
        navigate('/home');
      });
  };

  return (
    <AuthContext.Provider value={{ user, signIn }}>
      {children}
    </AuthContext.Provider>
  );
};
