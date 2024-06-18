import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate from react-router-dom
import axios from "axios";
import "./ProjectList.css";
import Progress from "./Progress";
import "./ProjectList.css";
import CreateProject from "../components/CreateProject";


const ProjectList = ({ color, content }) => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate(); // Initialize useNavigate

  useEffect(() => {
    // Fetch projects from backend when component mounts
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      const response = await axios.get("https://brawlers-017.onrender.com/api/v1/projects");
      setProjects(response.data); // Assuming response.data is an array of projects
      setLoading(false);
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  };

  const handleDonateClick = (projectId) => {
    console.log(projectId);
    navigate(`/donor/create-donation`, { state: { projectId } });
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
    <>
   <div>
    <CreateProject />
   </div>
    <div className="project-list mt-3">
      {projects.map((project) => (
        <div
          key={project._id}
          className="project-card"
          style={{ backgroundColor: color ? color : "" }}
        >
          <h3>{project.title}</h3>
          <img
            src={project.imageUrl}
            alt={project.title}
            className="project-image"
          />
          <p>{project.description}</p>
          <p>Goal Amount: {project.goalAmount}</p>
          <p>Current Amount: {project.currentAmount}</p>

          {content && (
            <>
              <Progress
                goalAmount={project.goalAmount}
                currentAmount={project.currentAmount}
              />
              <button
                className="donate"
                onClick={() => handleDonateClick(project._id)}
              >
                Donate now
              </button>
            </>
          )}
        </div>
      ))}
    </div>
    </>
  );
};

export default ProjectList;
