import "./App.css";
import ProjectList from "./components/ProjectList";
import projects from "./assets/exampleProjects.json";

function App() {
  return (
    <>
      <h1>Home Page</h1>
      <ProjectList projects={projects} />
    </>
  );
}

export default App;
