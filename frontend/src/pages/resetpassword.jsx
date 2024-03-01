// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


// import resetPasswordImage from '../../assets/images/reset-pass.png';
// import Header from "../../components/Header.jsx";
import AdminHeader from "../Admin/Dashboard/Components/Header.jsx";

const CreateNewPassword = () => {
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleResetPassword = async (e) => {
        e.preventDefault();

        const specialCharRegex = /[!@#$%^&*(),.?":{}|<>]/;
        const numberRegex = /\d/;
        const capitalRegex = /[A-Z]/g;

        if (
            newPassword.length >= 6 &&
            specialCharRegex.test(newPassword) &&
            numberRegex.test(newPassword) &&
            (newPassword.match(capitalRegex) || []).length >= 2 &&
            newPassword === confirmPassword
        ) {
            try {
                // Extract token from the URL
                const urlParams = new URLSearchParams(window.location.search);
                const token = urlParams.get('token');

                if (token) {
                    // Use the extracted token in the API request
                    const response = await axios.post(
                        'http://localhost:8787/system-user/new-password',
                        { token, newPassword }
                    );

                    console.log(response.data);
                    navigate('/login');
                } else {
                    setError('Invalid reset token.');
                }
            } catch (error) {
                console.error('Error setting new password:', error);
                setError('Error setting new password.');
            }
        } else {
            setError('New password must meet the specified requirements, and both passwords must match.');
        }
    };

    return (
        <div>

        <AdminHeader/>
            <center><div   className="container" style={{ marginTop: '300px', textAlign: 'center',marginRight:800 }}>
                <div  className="row justify-content-center align-items-center">
                    <div className="col-md-5">
                        {/*<img src={resetPasswordImage} alt="Reset Password" style={{ maxWidth: '100%' }} />*/}
                    </div>
                    <form className="col-md-4" onSubmit={handleResetPassword}>
                        <h1 className="text-center mb-4">Create New Password</h1>
                        <p className="text-muted mb-4">
                            <span style={{ fontWeight: 'bold', color: 'black' }}>New password must have:</span>
                            <br />
                            - <span style={{ color: 'black' }}>At least two capital alphabets</span>
                            <br />
                            - <span style={{ color: 'black' }}>Use any special characters</span>
                            <br />
                            - <span style={{ color: 'black' }}>At least 1 number</span>
                        </p>
                        {error && <div className="alert alert-danger" role="alert">{error}</div>}
                        <div className="mb-4">
                            <label htmlFor="newPassword" className="form-label text-start">
                                <span style={{ fontWeight: 'bold' }}>New Password</span>
                            </label>
                            <input
                                type="password"
                                className="form-control"
                                id="newPassword"
                                placeholder="Enter new password"
                                value={newPassword}
                                onChange={(e) => setNewPassword(e.target.value)}
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="confirmPassword" className="form-label text-start">
                                <span style={{ fontWeight: 'bold' }}>Confirm Password</span>
                            </label>
                            <input
                                type="password"
                                className="form-control"
                                id="confirmPassword"
                                placeholder="Confirm new password"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                required
                            />
                        </div>
                        <button type="submit" className="btn btn-success w-100" onClick={handleResetPassword}>Reset Password</button>
                    </form>
                </div>
            </div></center>

        </div>
    );
};

export default CreateNewPassword;
