import { Link, Route, Routes } from "react-router-dom"

function SignUp() {
  return (
    <div>
        <div>Sign Up</div>
        <form>
            <input type="email" placeholder="example@example.com"/>
            <input type="password"/>
            <input type="submit" value="Submit" />
        </form>
        <div><Link to="/signin">Have an account Sign in</Link></div>
    </div>
  );
}

export default SignUp;
