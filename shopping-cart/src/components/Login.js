import React  from "react";

import "../stylesheets/Login.css" 


function Login(){
  return(
        <div className="login-container">
        <h1 className="login-h1">Login</h1>
        <form>
            <label htmlFor="id">Account id</label>
            <input type="text" name="id" id="id"/>
 
            <label htmlFor="password">Password</label>
            <input type="password" name="password" id="password"/>
            <button className="login-btn" type="submit">
                Login
            </button>
        </form>
          
    </div>
  ) 
}


export default Login;