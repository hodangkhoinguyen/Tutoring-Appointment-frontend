import './style.css';
import { useState } from 'react';
import authService from '../../services/auth.js';
import { useNavigate } from 'react-router-dom';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const navigate = useNavigate();
    const signupHandler = (role) => {
        if (password !== confirmPassword) {
            alert('Confirmed password is not the same');
        } else {
            const user = {
                role: role,
                email: email,
                password: password,
                firstName: firstName,
                lastName: lastName,
            };

            authService
                .signup(user)
                .then(() => {
                    alert('Successfully sign up! You can log in now');
                    navigate('/login');
                })
                .catch((err) => alert(err.response.data.message));
        }
    };
    return (
        <div className="login-box">
            <div className="login-container">
                <div className="container grid wide">
                    <h2>Sign Up</h2>
                    <input
                        placeholder="First Name"
                        onChange={(e) => {
                            setFirstName(e.target.value);
                        }}
                        required
                    ></input>
                    <input
                        placeholder="Last Name"
                        onChange={(e) => {
                            setLastName(e.target.value);
                        }}
                        required
                    ></input>
                    <input
                        placeholder="Email"
                        onChange={(e) => {
                            setEmail(e.target.value);
                        }}
                        required
                    ></input>
                    <input
                        placeholder="Password"
                        onChange={(e) => {
                            setPassword(e.target.value);
                        }}
                        type="password"
                        required
                    ></input>
                    <input
                        placeholder="Confirm Password"
                        onChange={(e) => {
                            setConfirmPassword(e.target.value);
                        }}
                        type="password"
                        required
                    ></input>
                    <label>Sign up as:</label>
                    <div className="row">
                        <button
                            className="col l-6 m-6 c-12"
                            onClick={() => {
                                signupHandler('student');
                            }}
                        >
                            Student
                        </button>
                        <button
                            className="col l-6 m-6 c-12"
                            onClick={() => {
                                signupHandler('tutor');
                            }}
                        >
                            Tutor
                        </button>
                    </div>
                    <div className="action">
                        <label>
                            Have an account? <a href="/login">Log In</a>
                        </label>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
