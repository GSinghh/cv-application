import '../styles/App.css'
import '../components/Header.jsx'
import Header from '../components/Header.jsx'
import UserData from './UserData.jsx'
import Education from './Education.jsx'
import Experience from './Experience.jsx'
import { useState } from 'react'

const App = () => {
  const [userData, setUserData] = useState({});
  const [educationData, setEducationData] = useState({});
  const [experienceData, setExperienceData] = useState({});
  
  return (
    <div className = "container">
      <div className = "left-side">
        <Header />
        <UserData userData = {userData} setUserData = {setUserData}/>
        <Education educationData = {educationData} setEducationData = {setEducationData}/>
        <Experience experienceData = {experienceData} setExperienceData = {setExperienceData}/>
      </div>
      <div className = "right-side">
      </div>
    </div> 
  )
}

export default App
