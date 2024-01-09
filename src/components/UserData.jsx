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
                <input type = "text" className = "user-input" value = {userData.fullName} onChange={handleInputChange} name = "fullName" placeholder = 'i.e. John Doe' />
                <label>Email</label>
                <input type = "text" className = "user-input" value = {userData.email} onChange={handleInputChange} name = "email" placeholder = 'i.e. email@domain.com' />
                <label>Github</label>
                <input type = "text" className = "user-input" value = {userData.github} onChange={handleInputChange} name = "github" placeholder='i.e. github.com/username'/>
                <label>Linkedin</label>
                <input type = "text" className = "user-input"value = {userData.linkedin} onChange={handleInputChange} name = "linkedin" placeholder='i.e. linkedin.com/in/linkedin-username' />
            </form>
        </div>
    );
}

export default UserData;