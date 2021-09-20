import React from 'react';
import { Link } from 'react-router-dom';
import './project.scss';

const Project = ({ data: dt }) => {
  return (
    <div key={dt.id} className="card">
      <Link to={dt.link} className="link">
        <div className="card-image">
          <img src={dt.img} alt="" />
        </div>
        <div className="card-content">
          <div className="card-title">
            <h3>{dt.title}</h3>
          </div>
          <div
            className={
              dt.tags.findIndex((dt) => dt === 'mini') > -1
                ? 'card-tags d-none'
                : 'card-tags'
            }
          >
            {dt.tags.map((i, index) => (
              <button className="btn" key={index}>
                {i}
              </button>
            ))}
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Project;
