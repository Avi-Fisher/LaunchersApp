import "./Navbar.css"
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className='con-navbar'>
      <div className='con-links'>

      <Link to="/">Home</Link>
      <Link to="/launcher/add">Add Launcher</Link>
      <Link to="/launcher/details">Launcher Details</Link>
    
      </div>
    </div>
  )
}

export default Navbar