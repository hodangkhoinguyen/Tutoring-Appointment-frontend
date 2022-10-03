import './style.css';

function Login() {
    const loginHandler = () => {

    }

    return (
        <div className="login-box">
            <div className="login-container">
                <div className="container grid wide">
                    <h2>Sign Up</h2>
                    <input placeholder="Email" required></input>
                    <input placeholder="Password" type="password" required></input>
                    <input placeholder="Confirm Password" type="password" required></input>
                    <label>Sign up as:</label>
                    <div className="row">
                        <button className="col l-6 m-6 c-12" onClick={loginHandler}>Student</button>
                        <button className="col l-6 m-6 c-12" onClick={loginHandler}>Tutor</button>
                    </div>
                    <div className="action">
                        <label>Have an account? <a href="/login">Log In</a></label>                        
                    </div>                
                </div>
            </div>            
        </div>
    )
}

export default Login;