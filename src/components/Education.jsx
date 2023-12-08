import '../styles/Education.css'
import { useState } from 'react'
const Education = () => {
    const [formData, setFormData] = useState({
        school: '',
        degree: '',
        startDate: '',
        endDate: '',
        location: '',
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({...formData, [name]: value});
    }

    return (
        <div className = "edu-container">
            <h1 className = "edu-title">Education</h1>
            <form className = "edu-form">
                <label>School</label>
                <input type = "text" className = "edu-input" value = {formData.school} onChange={handleInputChange} name = "school"/>
                <label>Degree</label>
                <input type = "text" className = "edu-input" value = {formData.degree} onChange={handleInputChange} name = "degree"/>
                <label>Start Date</label>
                <input type = "text" className = "edu-input" value = {formData.startDate} onChange={handleInputChange} name = "startDate"/>
                <label>End Date</label>
                <input type = "text" className = "edu-input" value = {formData.endDate} onChange={handleInputChange} name = "endDate"/>
                <label>Location</label>
                <input type = "text" className = "edu-input" value = {formData.location} onChange={handleInputChange} name = "location"/>
            </form>
        </div>
    );
}

export default Education;