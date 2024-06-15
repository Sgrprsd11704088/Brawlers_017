import CreateProject from "../components/CreateProject";
import ProjectList from "../components/ProjectList";
import Auth from "../components/login";
import projects from "../assets/exampleProjects.json";


const Student = () => {
  return (
    <>
    <Auth/>
      <CreateProject />
      <ProjectList projects={projects} />
     
      <Auth/>
    </>
  );
};

export default Student;
