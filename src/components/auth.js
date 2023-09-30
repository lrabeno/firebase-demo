import { useState } from 'react';
import { auth, googleProvider } from '../config/firebase';
import {
  createUserWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from 'firebase/auth';

export const Auth = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  console.log(auth?.currentUser?.email);
  const signIn = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
    } catch (error) {
      console.log(error);
    }
  };

  const signInWithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (error) {
      console.timeLog(error);
    }
  };

  const logOut = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <input placeholder="name" onChange={(e) => setEmail(e.target.value)} />
      <input
        placeholder="password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={signIn}>Sign in</button>
      <button onClick={signInWithGoogle}>Sign in with google</button>
      <button onClick={logOut}>Log out</button>
    </div>
  );
};
