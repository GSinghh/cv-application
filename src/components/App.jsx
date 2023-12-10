import '../styles/App.css'
import '../components/Header.jsx'
import Header from '../components/Header.jsx'
import UserData from './UserData.jsx'
import Education from './Education.jsx'
import Experience from './Experience.jsx'

const App = () => {
  return (
    <div className = "container">
      <div className = "left-side">
        <Header />
        <UserData />
        <Education />
        <Experience />
      </div>
      <div className = "right-side">
      </div>
    </div> 
  )
}

export default App
