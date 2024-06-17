import CreateProject from "../components/CreateProject";
import ProjectList from "../components/ProjectList";
import projects from "../assets/exampleProjects.json";

const Student = () => {
  return (
    <>
      <CreateProject />
      <ProjectList projects={projects} content />
    </>
  );
};

export default Student;
