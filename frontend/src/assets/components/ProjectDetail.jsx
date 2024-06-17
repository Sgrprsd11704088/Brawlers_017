import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const ProjectDetail = () => {
  const { id } = useParams();
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProject = async () => {
      try {
        const res = await axios.get(`/api/v1/projects/${id}`);  // Ensure correct API path
        setProject(res.data);
        setLoading(false);
      } catch (err) {
        console.error(err.response ? err.response.data : err.message);
        setLoading(false);
      }
    };

    fetchProject();
  }, [id]);

  if (loading) {
    return <div className="container mt-5"><h2>Loading...</h2></div>;
  }

  if (!project) {
    return <div className="container mt-5"><h2>Project not found</h2></div>;
  }

  return (
    <div className="container mt-5">
      <h2 className="mb-4">{project.title}</h2>
      <img src={project.imageUrl} alt={project.title} className="img-fluid mb-4" />
      <p>{project.description}</p>
      <p><strong>Category:</strong> {project.category}</p>
      <p><strong>Goal Amount:</strong> ${project.goalAmount}</p>
    </div>
  );
};

export default ProjectDetail;
