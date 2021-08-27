import './sidebar.scss';
import { BorderAll, ContactMail, Web, Info } from '@material-ui/icons';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const menus = [
  {
    id: 1,
    title: 'Sections',
    link: '/sections',
    icon: <BorderAll className="menu-icon" />,
  },
  {
    id: 2,
    title: 'Contact',
    link: '/contact',
    icon: <ContactMail className="menu-icon" />,
  },
  {
    id: 3,
    title: 'Website',
    link: '/website',
    icon: <Web className="menu-icon" />,
  },
  {
    id: 4,
    title: 'About Me',
    link: '/about',
    icon: <Info className="menu-icon" />,
  },
];

const Sidebar = () => {
  const [activeMenu, setActiveMenu] = useState('');
  const [themeColor, setThemeColor] = useState('default');

  return (
    <div className={themeColor === 'default' ? 'sidebar' : 'sidebar light'}>
      <div className="sidebar-container">
        <div className="sidebar-top">
          <Link to="/" className="link">
            <img
              src="asset/upload.jpg"
              alt=""
              onClick={() => setActiveMenu('/')}
            />
          </Link>
        </div>
        <div className="sidebar-center">
          <ul>
            {menus.map((dt) => (
              <Link key={dt.id} className="link" to={dt.link}>
                <li
                  className={dt.title === activeMenu ? 'active' : null}
                  onClick={(e) => setActiveMenu(dt.title)}
                >
                  {dt.icon}
                  <span>{dt.title}</span>
                </li>
              </Link>
            ))}
          </ul>
        </div>
        <div className="sidebar-bottom">
          <div
            className="color-pallete light"
            onClick={() => setThemeColor('light')}
          ></div>
          <div
            className="color-pallete default"
            onClick={() => setThemeColor('default')}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
