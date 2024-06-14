import "./App.css";
import Auth from "./components/login.jsx";
import ProjectList from "./components/ProjectList";
import projects from "./assets/exampleProjects.json";
import CreateProject from "./components/CreateProject";

function App() {
  return (
    <>
    <Auth></Auth>      
      <h1>Home Page</h1>
      <ProjectList projects={projects} />
      <CreateProject/>
    </>
  );
}

export default App;
