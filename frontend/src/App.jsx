import "./App.css";
import Auth from "./components/login.jsx";
import ProjectList from "./components/ProjectList";
import projects from "./assets/exampleProjects.json";
import CreateProject from "./components/CreateProject";
import About from "./components/About.jsx";
import Footer from './components/Footer.jsx'
import { Route, Routes } from "react-router-dom";
import Home from "./components/Admin/Home.jsx";
import Login from "./components/Admin/Login.jsx";


function App() {
  return (
    <>
      <Auth />
      <h1>Home Page</h1>
      <CreateProject />
      <ProjectList projects={projects} />
      <About/>
      <Routes>
        <Route path="/admin" element={<Home />}></Route>
        <Route path="/admin/login" element={<Login />}></Route>
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
