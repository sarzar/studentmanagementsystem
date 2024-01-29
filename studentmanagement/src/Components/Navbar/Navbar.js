import {Outlet, Link} from "react-router-dom";
import "./Navbar.css";



function Navbar(){
    return (
    <>

      <nav className = "navbar">   
        <ul className="nav-menu">
            <li className="nav-item">
                <Link className="nav-links" to="/">Home</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-links" to="/Students">Students</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-links" to="/Courses">Courses</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-links" to="/Results">Results</Link>
            </li>
        </ul>
        
      </nav>

      <Outlet/>
    </>
    )
};
export default Navbar;