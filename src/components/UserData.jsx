import '../styles/UserData.css'
import { useState } from 'react';

const UserData = ({ userData, setUserData }) => {
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setUserData({ ...userData, [name]: value, });
    };

    return (
        <div className = "user-container">
            <h1 className = "user-title">Personal Information</h1>
            <form className = "user-form">
                <label>Full Name</label>
                <input type = "text" className = "user-input" value = {userData.fullName} onChange={handleInputChange} name = "fullName"/>
                <label>Email</label>
                <input type = "text" className = "user-input" value = {userData.email} onChange={handleInputChange} name = "email"/>
                <label>Phone Number</label>
                <input type = "text" className = "user-input" value = {userData.phoneNumber} onChange={handleInputChange} name = "phoneNumber"/>
                <label>Address</label>
                <input type = "text" className = "user-input"value = {userData.address} onChange={handleInputChange} name = "address"/>
            </form>
        </div>
    );
}

export default UserData;