import './App.css'
import {BrowserRouter, Routes,Route} from "react-router-dom"
import Home from './pages/Home/Home'
import AddLauncher from './pages/AddLauncher/AddLauncher'
import LauncherDetails from './pages/LauncherDetails/LauncherDetails'

function App() {
  

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={Home}/> 
          <Route path='/launcher/add' element={AddLauncher}/> 
          <Route path='/launcher/details' element={LauncherDetails}/> 
        </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
