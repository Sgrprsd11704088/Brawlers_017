import "./App.css";
import Auth from "./components/login.jsx";
import ProjectList from "./components/ProjectList";
import projects from "./assets/exampleProjects.json";
import CreateProject from "./components/CreateProject";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Admin/Home.jsx";
import Login from "./components/Admin/Login.jsx";
import PaymentForm from "./components/PaymentForm.jsx";

function App() {
  return (
    <>
    
      <Auth />
      <h1>Home Page</h1>
      <PaymentForm></PaymentForm>
      <CreateProject />
      <ProjectList projects={projects} />

      <Routes>
        <Route path="/admin" element={<Home />}></Route>
        <Route path="/admin/login" element={<Login />}></Route>
      </Routes>
    </>
  );
}

export default App;
