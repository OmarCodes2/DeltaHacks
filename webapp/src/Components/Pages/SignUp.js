import { Link, Route, Routes } from "react-router-dom"
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
    <div>
        <div>Sign Up</div>
        <form onSubmit={handleSubmit}> 
            <input type="text" placeholder="First Name" value={firstName} onChange={(e) => setFirstName(e.target.value)}/>
            <input type="text" placeholder="Last Name" value={lastName} onChange={(e) => setLastName(e.target.value)}/>
            <input type="email" placeholder="example@example.com" value={email} onChange={(e) => setEmail(e.target.value)}/>
            <div>{mailError}</div>
            <input type="password" placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
            <input type="submit" value="Submit" />
            <div>{errorMessage}</div>
        </form>
        <div><Link to="/signin">Have an account Sign in</Link></div>
        
    </div>
  );
}

export default SignUp;
