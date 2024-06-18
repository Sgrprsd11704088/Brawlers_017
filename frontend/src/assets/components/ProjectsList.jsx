// src/components/ProjectsList.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import CreateProject from '../../components/CreateProject';

const ProjectsList = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await axios.get('/api/projects');
        setProjects(res.data);
      } catch (err) {
        console.error(err.response.data);
      }
    };

    fetchProjects();
  }, []);

  return (
    <>
    <CreateProject />
    <div className="container mt-5">
      <h2 className="mb-4">Projects List</h2>
      <div className="row">
        {projects.map(project => (
          <div className="col-lg-4 col-md-6 mb-4" key={project._id}>
            <div className="card h-100">
              <img src={project.image} className="card-img-top" alt={project.title} />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{project.title}</h5>
                <p className="card-text">{project.description.substring(0, 100)}...</p>
                <div className="mt-auto">
                  <Link to={`/projects/${project._id}`} className="btn btn-primary">View Details</Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

export default ProjectsList;
