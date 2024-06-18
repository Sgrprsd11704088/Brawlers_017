import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Progress from './Progress';
import './studentlist.css';

const ProjectList = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch projects from backend when component mounts
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/v1/projects');
      setProjects(response.data); // Assuming response.data is an array of projects
      setLoading(false);
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  if (projects.length === 0) {
    return <p>No projects available.</p>;
  }

  return (
    <div className="project-list">
      {projects.map((project) => (
        <div
          key={project._id}
          className="project-card"
        >
          <h3>{project.title}</h3>
          <img src={project.imageUrl} alt={project.title} className="project-image" />
          <p>{project.description}</p>
          <p>Goal Amount: {project.goalAmount}</p>
          <p>Current Amount: {project.currentAmount}</p>
          <Progress projectId={project._id} />
          <button className="donate">Donate now</button>
        </div>
      ))}
    </div>
  );
};

export default ProjectList;
