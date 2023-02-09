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
  logout: () => void;
  addComment: (id: number, comment: string) => void;
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
    console.debug('aqui');
    const persistedUser = getUser();
    console.debug('persistedUser' + persistedUser);
    if(persistedUser && persistedUser !== JSON.stringify(user))
      setUser(JSON.parse(persistedUser));

  }, []);

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

  const logout = () => {
    setUser(null);
    localStorage.removeItem(LOCALSTORAGE_USER);
  };

  const addComment = (id: number, comment: string) => {
    alert('adding commnet to book id ' + id);
  };

  return (
    <AuthContext.Provider value={{ user, signIn, logout, addComment }}>
      {children}
    </AuthContext.Provider>
  );
};
