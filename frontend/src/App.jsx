
import "./App.css";
import { useState } from "react";
import Student from "./Pages/Student";
import Admin from "./Pages/Admin";

import { Route, Routes } from "react-router-dom";
import Home from "./components/Admin/Home.jsx";
import Login from "./components/Admin/Login.jsx";
import PaymentForm from "./components/PaymentForm.jsx";
import Sidebar from "./components/Admin/components/Sidebar";

import Donar from "./Pages/Donar";
import Navbar from "./components/Navbar.jsx";


  
const App = () => {
  const [roles, setRoles] = useState("donor");

  const [isLoggedIn, setIsLoggedIn] = useState(true);
  return (
    <>
<Navbar></Navbar>
    
      <Auth />
      <h1>Home Page</h1>
      <PaymentForm></PaymentForm>
      <CreateProject />
      <ProjectList projects={projects} />

      <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<Logins />} />
        {roles === "student" && <Route path="/" element={<Student />} />}

        {roles === "donor" && <Route path="/" element={<Donar />} />}


        {roles === "donor" && <Route path="/donor/*" element={<Donar />} />}

        {roles === "admin" && isLoggedIn ? (
          <Route path="admin/*" element={<Sidebar />}>
            <Route path="dashboard/*" element={<Admin />} />
          </Route>
        ) : (
          <Route path="/" element={<Logins />} />
        )}
      </Routes>


      {/* <Auth />      
      <About />
      <Footer /> */}

    </>
  );
}

export default App;
