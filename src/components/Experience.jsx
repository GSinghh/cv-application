import '../styles/Experience.css'
import { useState } from 'react'

const Experience = () => {

    const [formData, setFormData] = useState({
        position: '',
        company: '',
        startDate: '',
        endDate: '',
        description: '',
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({...formData, [name]: value});
    }

    return (
        <div className='exp-container'>
            <h1 className = 'exp-title'>Experience</h1>
            <form className='exp-form'>
                <label>Position</label>
                <input type = 'text' className = 'exp-input' onChange = {handleInputChange} value = {formData.position} name = 'position'/>
                <label>Company</label>
                <input type = 'text' className = 'exp-input' onChange = {handleInputChange} value = {formData.company} name = 'company'/>
                <label>Start Date</label>
                <input type = 'text' className = 'exp-input' onChange = {handleInputChange} value = {formData.startDate} name = 'startDate'/>
                <label>End Date</label>
                <input type = 'text' className = 'exp-input' onChange = {handleInputChange} value = {formData.endDate} name = 'endDate'/>
                <label>Job Description</label>
                <textarea className = 'exp-input' onChange = {handleInputChange} value={formData.description} name = 'description' rows = '4'></textarea>
            </form>
        </div>
    );
};

export default Experience