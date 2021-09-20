import './vanila.scss';
import img from './one-draw.svg';
import ProjectList from '../../comp/projectList/ProjectList';
import projectData from '../../../projectData';

const Vanila = () => {
  // const filteredData = projectData.filter((dt) =>
  //   dt.tags.find((dt) => dt === 'mini-js')
  // );

  return (
    <div className="vanila">
      <div className="banner">
        <div className="left">
          <h1>HTML,CSS & JAVASCRIPT</h1>
          <p>These project made by html css and javascript</p>
        </div>
        <div className="right">
          <img src={img} alt="" />
        </div>
      </div>

      <div className="project-title">
        <div className="title">Mini Projects</div>
        <div className="line"></div>
      </div>

      <div className="projects">
        <ProjectList projectData={projectData} />
      </div>
    </div>
  );
};

export default Vanila;
