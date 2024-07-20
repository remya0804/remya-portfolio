import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'

import Navbar from './Components/Navbar/Navbar'
import HomePage from './Pages/HomePage/HomePage'
import ProjectPage from './Pages/ProjectPage.css/ProjectPage'
import Scroll from './Components/Scroll'
import Footer from './Components/Footer/Footer'

function App() {
 

  return (
    <>

    <Navbar />


        <Routes>      

            <Route path='/remya-portfolio'  element={<HomePage />} />

            <Route path='/remya-portfolio/:projectNO/:projectName'  element={<ProjectPage />} />



        </Routes>

        <Footer />

    
      
    </>
  )
}

export default App
