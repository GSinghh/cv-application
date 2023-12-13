import '../styles/Education.css'
import { useState } from 'react'
const Education = ({ educationData, setEducationData }) => {
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setEducationData({...educationData, [name]: value});
    }

    return (
        <div className = "edu-container">
            <h1 className = "edu-title">Education</h1>
            <form className = "edu-form">
                <label>School</label>
                <input type = "text" className = "edu-input" value = {educationData.school} onChange={handleInputChange} name = "school"/>
                <label>Degree</label>
                <input type = "text" className = "edu-input" value = {educationData.degree} onChange={handleInputChange} name = "degree"/>
                <label>Start Date</label>
                <input type = "text" className = "edu-input" value = {educationData.startDate} onChange={handleInputChange} name = "startDate"/>
                <label>End Date</label>
                <input type = "text" className = "edu-input" value = {educationData.endDate} onChange={handleInputChange} name = "endDate"/>
                <label>Location</label>
                <input type = "text" className = "edu-input" value = {educationData.location} onChange={handleInputChange} name = "location"/>
            </form>
        </div>
    );
}

export default Education;