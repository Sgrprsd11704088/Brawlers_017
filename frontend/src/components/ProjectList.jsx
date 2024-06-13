import Progress from "./Progress";

const ProjectList = ({ projects }) => {
  return (
    <div>
      {projects.map((project) => (
        <div
          key={project._id}
          style={{ margin: "20px", border: "1px solid #ccc", padding: "10px" }}
        >
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          <p>Goal Amount: ${project.goalAmount}</p>
          <p>Current Amount: ${project.currentAmount}</p>
          <Progress projectId={project._id} />
        </div>
      ))}
    </div>
  );
};

export default ProjectList;
