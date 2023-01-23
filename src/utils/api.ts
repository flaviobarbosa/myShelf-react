import axios from 'axios';

const firebaseApiKey = import.meta.env.VITE_FIREBASE_API_KEY;

export const api = axios.create({
  baseURL: 'https://identitytoolkit.googleapis.com/v1',
});

interface SignUpProps {
  name: string;
  email: string;
  password: string;
}

export function signUp({name, email, password}: SignUpProps) {

  api.post(`/accounts:signUp?key=${firebaseApiKey}`, {
    email,
    password,
    returnSecureToken: true
  })
    .then(response => {
      const { idToken } = response.data;

      api.post(`accounts:update?key=${firebaseApiKey}`, {
        idToken,
        displayName: name,
        returnSecureToken: true
      })
        .then(response => {
          console.log('account successfully created');
        });
    });
}

