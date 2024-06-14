import "./App.css";
import { useState } from "react";
import Student from "./Pages/Student";
import Admin from "./Pages/Admin";
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
  );
}

export default App;
