import "./App.css";
import { useState } from "react";
import Student from "./Pages/Student";
import Admin from "./Pages/Admin";
import Auth from "./components/login.jsx";
import ProjectList from "./components/ProjectList";
import projects from "./assets/exampleProjects.json";
import CreateProject from "./components/CreateProject";
import About from "./components/About.jsx";
import Footer from './components/Footer.jsx'
import { Route, Routes } from "react-router-dom";
import Sidebar from "./components/Admin/components/Sidebar";
import Login from "./components/Admin/Login";
import Donar from "./Pages/Donar";


function App() {

  const [roles, setRoles] = useState("admin");
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  return (
    <Routes>
      {roles === "student" && <Route path="/" element={<Student />} />}
      {roles === "doner" && <Route path="/" element={<Donar />} />}
      {roles === "admin" && isLoggedIn ? (
        <Route path="admin/*" element={<Sidebar />}>
          <Route path="dashboard/*" element={<Admin />} />
        </Route>
      ) : (
        <Route path="/" element={<Login />} />
      )}
    </Routes>

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
