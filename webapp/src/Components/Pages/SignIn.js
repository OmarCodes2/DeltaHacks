import { Link } from "react-router-dom"

function SignIn() {
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('signed in')
  }

  return (
    <div className="login">
        <h1 className="login-title">Welcome back</h1>
        <form onSubmit={handleSubmit}>
            <input className="input" type="email" placeholder="Email"/>
            <input className="input" type="password" placeholder="Password"/>
            <Link to="/home"><input type="submit" value="SIGN IN" className="action-button" /></Link>
        </form>
        <p>Don't have an account? <Link className="login-redirect" to="/signup">Sign up</Link></p>
    </div>
  );
}

export default SignIn;
