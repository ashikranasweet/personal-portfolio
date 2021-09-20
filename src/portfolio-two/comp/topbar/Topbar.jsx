import './topbar.scss';
import { Facebook, GitHub } from '@material-ui/icons';
import { Link } from 'react-router-dom';
const Topbar = () => {
  return (
    <div className="topbar">
      <div className="left">
        <i className="brand fab fa-sketch"></i>
      </div>
      <div className="middle">
        <ul>
          <Link to="/" className="link">
            <li>
              <span>Home</span>
            </li>
          </Link>
          <Link to="/projects" className="link">
            <li>
              <span>Projects</span>
            </li>
          </Link>
          <Link to="/contact" className="link">
            <li>
              <span>Contact</span>
            </li>
          </Link>
        </ul>
      </div>
      <div className="right">
        <Facebook className="icon" />
        <GitHub className="icon" />
      </div>
    </div>
  );
};

export default Topbar;
