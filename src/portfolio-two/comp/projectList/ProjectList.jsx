import './projectList.scss';
import Project from '../project/Project';

const ProjectList = ({ projectData }) => {
  return (
    <div className="projectList">
      <div className="cards">
        {projectData.map((dt) => (
          <Project data={dt} />
        ))}
      </div>
    </div>
  );
};

export default ProjectList;
