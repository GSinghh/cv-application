import '../styles/UserData.css'
import { useState } from 'react';

const UserData = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phoneNumber: '',
        address: '',
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value, });
    };

    return (
        <div className = "user-container">
            <h1 className = "user-title">Personal Information</h1>
            <form className = "user-form">
                <label>Full Name</label>
                <input type = "text" className = "user-input" value = {formData.fullName} onChange={handleInputChange} name = "fullName"/>
                <label>Email</label>
                <input type = "text" className = "user-input" value = {formData.email} onChange={handleInputChange} name = "email"/>
                <label>Phone Number</label>
                <input type = "text" className = "user-input" value = {formData.phoneNumber} onChange={handleInputChange} name = "phoneNumber"/>
                <label>Address</label>
                <input type = "text" className = "user-input"value = {formData.address} onChange={handleInputChange} name = "address"/>
            </form>
        </div>
    );
}

export default UserData;