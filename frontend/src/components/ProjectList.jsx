import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Progress from './Progress';

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
      const response = await axios.get('http://localhost:9090/api/v1/projects');
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
    <div>
      {projects.map((project) => (
        <div
          key={project._id}
          style={{ margin: '20px', border: '1px solid #ccc', padding: '10px' }}
        >
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          <p>Goal Amount: {project.goalAmount}</p>
          <p>Current Amount: {project.currentAmount}</p>
          <Progress projectId={project._id} />
        </div>
      ))}
    </div>
  );
};

export default ProjectList;
