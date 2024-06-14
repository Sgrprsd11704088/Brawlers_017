// src/components/ProjectDetail.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const ProjectDetail = () => {
  const { id } = useParams();
  const [project, setProject] = useState(null);

  useEffect(() => {
    const fetchProject = async () => {
      try {
        const res = await axios.get(`/api/projects/${id}`);
        setProject(res.data);
      } catch (err) {
        console.error(err.response.data);
      }
    };

    fetchProject();
  }, [id]);

  if (!project) return <div>Loading...</div>;

  return (
    <div className="container mt-5">
      <h2>{project.title}</h2>
      <img src={project.image} className="img-fluid" alt={project.title} />
      <p>{project.description}</p>
      <p><strong>Category:</strong> {project.category}</p>
      <p><strong>Goal Amount:</strong> Php {project.goalAmount}</p>
      <p><strong>Current Amount:</strong> Php {project.currentAmount}</p>
    </div>
  );
};

export default ProjectDetail;
