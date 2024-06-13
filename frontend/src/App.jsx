import "./App.css";
import ProjectList from "./components/ProjectList";
import projects from "./assets/exampleProjects.json";
import CreateProject from "./components/CreateProject";

function App() {
  return (
    <>
      <h1>Home Page</h1>
      <ProjectList projects={projects} />
      <CreateProject/>
    </>
  );
}

export default App;
