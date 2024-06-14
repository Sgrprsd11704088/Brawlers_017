import CreateProject from "../components/CreateProject";
import ProjectList from "../components/ProjectList";
import Auth from "../components/login";
import projects from "../assets/exampleProjects.json";

const Student = () => {
  return (
    <>
      <Auth />
      <h1>Home Page</h1>
      <CreateProject />
      <ProjectList projects={projects} />
    </>
  );
};

export default Student;
