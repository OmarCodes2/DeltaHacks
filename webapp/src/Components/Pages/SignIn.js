import { Link, Route, Routes } from "react-router-dom"
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
    <div>
        <div>Sign In</div>
        <form onSubmit={handleSubmit}>
            <input type="email" placeholder="example@example.com" value={email} onChange={(e) => setEmail(e.target.value)}/>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
            <div>{errorMessage}</div>
            <input type="submit" value="Submit" />
            
        </form>
        <div><Link to="/signup">Have an account Sign up</Link></div>
    </div>  
  );
}

export default SignIn;
