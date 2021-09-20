import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import projectData from './projectData';
import './projectPage.scss';
import { Link } from 'react-router-dom';
import ProjectList from '../../comp/projectList/ProjectList';

const types = [
  {
    id: 1,
    value: 'all',
  },
  {
    id: 2,
    value: 'html & css',
  },
  {
    id: 3,
    value: 'sass',
  },
  {
    id: 4,
    value: 'javascript',
  },
  {
    id: 5,
    value: 'react',
  },
];

const ProjectPage = () => {
  const [tag, setTag] = useState('all');
  const [projects, setProjects] = useState(projectData);

  useEffect(() => {
    if (tag === 'all') {
      setProjects(projectData);
    } else {
      const filtered = projectData.filter((dt) => dt.tags.indexOf(tag) > -1);
      setProjects(filtered);
    }
  }, [tag]);
  return (
    <div className="projectPage">
      <div className="top">
        <h1>All Projects</h1>
        <p>Filter By Category</p>
        <select name="" id="" onChange={(e) => setTag(e.target.value)}>
          {types.map((dt) => (
            <option key={dt.id} value={dt.value}>
              {dt.value.toUpperCase()}
            </option>
          ))}
        </select>
      </div>

      <div className="middle">
        <ProjectList projectData={projects} />
      </div>
    </div>
  );
};

export default ProjectPage;
