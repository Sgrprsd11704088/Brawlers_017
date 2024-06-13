import "./App.css";
import Auth from "./components/login.jsx";
import ProjectList from "./components/ProjectList";
import projects from "./assets/exampleProjects.json";

function App() {
  return (
    <>
    <Auth></Auth>      
      <h1>Home Page</h1>
      <ProjectList projects={projects} />
    </>
  );
}

export default App;
