import React, { useState } from 'react';
import styles from './Login.module.css';
import tree from '../../assets/tree.png';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';
import { setDoc, doc } from 'firebase/firestore';

const CreateAccount = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    

    if (!email || !password) {
      alert("Please fill in both fields.");
      return;
    }

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      const user = auth.currentUser ;
      console.log(user);
      if(user) {
        await setDoc(doc(db, "Users" , user.uid),{
            email:user.email
        });
      }
      console.log("User  registered successfully");
    } catch (error) {
      console.log(error.message);
      alert(error.message); 
    }
  };

  return (
    <form className={styles.login} onSubmit={handleRegister}>
      <div className={styles.login_content}>
        <h1 className={styles.heading}>Create Account</h1>
        <p>It's great to have you back</p>
        
        <label className={styles.inputLabel} htmlFor="email">Email</label>
        <input
          className={styles.input}
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        
        <label className={styles.inputLabel} htmlFor="password">Password</label>
        <input
          className={styles.input}
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        
        <div className={styles.fp}>
          <div>
            <input type="checkbox" />
            <label htmlFor="">Remember me</label>
          </div>
          <div>
            <label htmlFor="">Forget Password?</label>
          </div>
        </div>
        
        <div className={styles.btn}>
          <button className={styles.lbtn} type="button"><a href="/Login">Login</a></button>
          <button className={styles.cbtn} type="submit">Create Account</button>
        </div>
      </div>
      <div className={styles.login_img}>
        <img src={tree} alt="" />
      </div>
    </form>
  );
};

export default CreateAccount;