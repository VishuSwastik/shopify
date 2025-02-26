import React from 'react'
import styles from './Login.module.css';
import tree from '../../assets/tree.png'

const Login = () => {


  

    
  return (
    <form className={styles.login}>
      <div className={styles.login_content}>
        <h1 className={styles.hedding}>
        Welcome back to  Login
        </h1>
        <p>Its great to have you back</p>
        <label className={styles.inputlable} htmlFor="email">Email</label>
        <input className={styles.input} type="email" />
        <label className={styles.inputlable} htmlFor="Password">Password</label>
        <input className={styles.input}  type="text" />
        <div className={styles.fp}>
            <div>
                <input type="checkbox" />
            <label htmlFor="">Remember me</label>
            </div>
            <div>
            <label htmlFor="">Forget Password ?</label>
            </div>
        </div>
        
        <div className={styles.btn}>
            <button className={styles.lbtn}>Login</button>
            <button className={styles.cbtn} > <a href="/createAccount">Create Account</a> </button>
        </div>
      </div>
      <div className={styles.login_img}>
        <img src={tree} alt="" />
      </div>
    </form>
  )
}

export default Login
