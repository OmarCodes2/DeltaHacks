import { Link } from "react-router-dom"

function SignUp() {
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('signed in')
  }

  return (
    <div className="login">
        <h1 className="login-title">Welcome</h1>
        <form onSubmit={handleSubmit}>
        <input className="input" type="email" placeholder="Email"/>
            <input className="input" type="password" placeholder="Password"/>
            <Link to="/home"><input type="submit" value="SIGN UP" className="action-button" /></Link>
        </form>
        <p>Have an account? <Link className="login-redirect" to="/signin">Sign in</Link></p>
    </div>
  );
}

export default SignUp;
