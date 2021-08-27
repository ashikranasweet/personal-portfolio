import './sections.scss';

const sections = [
  {
    id: 1,
    title: 'Navbar',
    designner: 'Ashik Rana',
    date: '24/4/2021',
    link: 'http://netlify.com/one/navbar',
    img: 'https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
  },
  {
    id: 1,
    title: 'Navbar',
    designner: 'Ashik Rana',
    date: '24/4/2021',
    link: 'http://netlify.com/one/navbar',
    img: 'https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
  },
  {
    id: 1,
    title: 'Sidebar',
    designner: 'Ashik Rana',
    date: '24/4/2021',
    link: 'http://netlify.com/one/navbar',
    img: 'https://images.pexels.com/photos/4491459/pexels-photo-4491459.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
  },
  {
    id: 1,
    title: 'Navbar',
    designner: 'Ashik Rana',
    date: '24/4/2021',
    link: 'http://netlify.com/one/navbar',
    img: 'https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
  },
];

const Sections = () => {
  return (
    <div className="sections">
      <div className="top">
        <div className="title">
          <div className="text">Show Website Sections</div>
          <div className="line"></div>
        </div>
      </div>

      <div className="section-container">
        {sections.map((dt) => (
          <div className="single-section">
            <div className="img-data">
              <img src={dt.img} alt="" />
            </div>
            <div className="text-data">
              <div className="title">
                Section Name: <span>{dt.title}</span>
              </div>
              <div className="designer">Developed By: {dt.designer}</div>
              <div className="date">Date: {dt.date}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sections;
