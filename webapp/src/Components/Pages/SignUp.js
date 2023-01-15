import { Link } from "react-router-dom"
import { useState } from "react";

function SignUp() {
  
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("")
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [mailError, setMailError] = useState("");
  
    
  const handleSubmit = (event) => {
    setErrorMessage("");
    setMailError("");

    event.preventDefault();
    if(email.length==0 || password.length==0 || firstName.length == 0 || lastName.length == 0){
      setErrorMessage("Do not leave fields blank");
    } else if(!email.includes("@mcmaster.ca")){
      setMailError("Please enter a valid mcmaster email");
    }
  }

  return (
    <div className="login">
        <h1 className="login-title">Welcome</h1>
        <form onSubmit={handleSubmit}>
            <input className="input" type="text" placeholder="First Name" value={firstName} onChange={(e) => setFirstName(e.target.value)}/>
            <input className="input" type="text" placeholder="Last Name" value={lastName} onChange={(e) => setLastName(e.target.value)}/>
            <input className="input" type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}/>
            <input className="input" type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
            <Link to="/home"><input type="submit" value="SIGN UP" className="action-button" /></Link>
        </form>
        <p>Have an account? <Link className="login-redirect" to="/signin">Sign in</Link></p>
    </div>
  );
}

export default SignUp;
