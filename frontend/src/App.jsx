
import "./App.css";
import { useState } from "react";
import Student from "./Pages/Student";
import Admin from "./Pages/Admin";

import { Route, Routes } from "react-router-dom";


import Sidebar from "./components/Admin/components/Sidebar";

import Donar from "./Pages/Donar";
import HomePage from "./components/Home.jsx";
import Logins from "./components/Login/logins.jsx";




  
const App = () => {
  const [roles, setRoles] = useState("donor");

  const [isLoggedIn, setIsLoggedIn] = useState(true);
  return (
    <>

    
      {/* <Auth /> */}
      {/* <h1>Home Page</h1> */}
      {/* <PaymentForm></PaymentForm> */}
      {/* <CreateProject /> */}
      

      <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<Logins />} />
        {roles === "student" && <Route path="/" element={<Student />} />}

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
