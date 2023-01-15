import { Link } from "react-router-dom";
import { useState } from "react";

function SignIn() {
  
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("HERE");
    if(email.length==0 || password.length==0){
      setErrorMessage("Do not leave fields blank");
    }
  }

  return (
    <div className="login">
        <h1 className="login-title">Welcome back</h1>
        <form onSubmit={handleSubmit}>
            <input className="input" type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}/>
            <input className="input" type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
            <Link to="/home"><input type="submit" value="SIGN IN" className="action-button" /></Link>
        </form>
        <p>Don't have an account? <Link className="login-redirect" to="/signup">Sign up</Link></p>
    </div>
  );
}

export default SignIn;
