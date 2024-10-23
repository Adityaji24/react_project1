import { Link, Outlet } from "react-router-dom";
import './Layout.css'; // Import the CSS file

const Layout = () => {
    return (
        <>
            <nav className="navbar">
                <ul className="navbar-links">
                    <li><Link to="home">Home</Link></li>
                    <li><Link to="insert">Insert Data</Link></li>
                    <li><Link to="display">Display Data</Link></li>
                    <li><Link to="search">Search Data</Link></li>
                    <li><Link to="update">Update</Link></li>
                </ul>
            </nav>

            <hr className="divider" />
            
            <Outlet /> {/* This will render child routes */}
            
            <hr className="divider" />
        </>
    );
};

export default Layout;
