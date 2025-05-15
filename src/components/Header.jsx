import { Link, useLocation } from 'react-router-dom';
// import './Header.css'; // optional if you split styles

const Header = () => {
  const location = useLocation();

  return (
    <header id="header">
      <img src="/logo2.png" alt="Logo" />
      <ul className="main-menu">
        <li><Link to="/about" className={location.pathname === '/about' ? 'active' : ''}>About</Link></li>
        <li><Link to="/projects" className={location.pathname === '/projects' ? 'active' : ''}>Projects</Link></li>
        <li><Link to="/resources" className={location.pathname === '/resources' ? 'active' : ''}>Resources</Link></li>
        <li><Link to="/boardgames" className={location.pathname === '/boardgames' ? 'active' : ''}>Board Games</Link></li>
        {/* Add other links later */}
      </ul>
    </header>
  );
};

export default Header;
