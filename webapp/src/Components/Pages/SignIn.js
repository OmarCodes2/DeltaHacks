import { Link, Route, Routes } from "react-router-dom"
function SignIn() {
  return (
    <div>
        <div>Sign In</div>
        <form>
            <input type="email" placeholder="example@example.com"/>
            <input type="password"/>
            <input type="submit" value="Submit" />
        </form>
        <div><Link to="/signup">Have an account Sign up</Link></div>
    </div>
  );
}

export default SignIn;
