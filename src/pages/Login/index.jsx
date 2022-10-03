import './style.css';
import { useState } from 'react';
import authService from '../../services/auth.js';
import loginSlice from './loginSlice.js';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
// import { useSelector } from 'react-redux';
// import { loginSelector } from './../../redux/selectors.js';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const loginHandler = (role) => {
        const user = {
            role: role,
            email: email,
            password: password,
        };

        authService
            .login(user)
            .then((result) => {
                console.log(result);
                dispatch(loginSlice.actions.setLogin(result));
                navigate('/');
            })
            .catch((err) => {
                console.log(err);
            });
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    return (
        <div className="login-box">
            <div className="login-container">
                <div className="container grid wide">
                    <h2>Log In</h2>
                    <input value={email} onChange={handleEmailChange} placeholder="Email" required></input>
                    <input
                        value={password}
                        onChange={handlePasswordChange}
                        placeholder="Password"
                        type="password"
                        required
                    ></input>
                    <label>Log in as:</label>
                    <div className="row">
                        <button
                            className="col l-6 m-6 c-12"
                            onClick={() => {
                                loginHandler('student');
                            }}
                        >
                            Student
                        </button>
                        <button
                            className="col l-6 m-6 c-12"
                            onClick={() => {
                                loginHandler('tutor');
                            }}
                        >
                            Tutor
                        </button>
                    </div>
                    <div className="action">
                        <a href="/">Forgot Password</a>
                        <a href="/signup">Sign Up</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
