import { Route, Routes } from "react-router-dom";
import Home from "../components/Admin/Home";
import Users from "../components/Admin/Users";
import Donations from "../components/Admin/Donations";
import Projects from "../components/Admin/Projects";
import NewProject from "../components/Admin/NewProject.jsx";
import NewUser from "../components/Admin/NewUser.jsx";
import axios from "axios";
import { useEffect, useState } from "react";

const Admin = () => {
  const [totalUsers, setTotalUsers] = useState(0);
  const [totalProjects, setTotalProjects] = useState(0);
  const [totalDonations, setTotalDonations] = useState(0);

  const diffContent = [
    { id: 1, amount: totalUsers, title: "Users" },
    { id: 2, amount: totalProjects, title: "Projects" },
    { id: 3, amount: totalDonations, title: "Donations" },
  ];

  const getUsers = async () => {
    try {
      let users = await axios.get(
        "https://brawlers-017.onrender.com/api/v1/admin"
      );

      let projects = await axios.get(
        "https://brawlers-017.onrender.com/api/projects"
      );

      let donations = await axios.get(
        "https://brawlers-017.onrender.com/api/donations"
      );

      setTotalDonations(donations.data.length);
      setTotalProjects(projects.data.length);
      setTotalUsers(users.data.length);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home diffContent={diffContent} />} />
        <Route path="users" element={<Users />} />
        <Route path="projects" element={<Projects />} />
        <Route path="donations" element={<Donations />} />

        <Route path="newProject" element={<NewProject />} />
        <Route path="newUser" element={<NewUser />} />
      </Routes>
    </div>
  );
};

export default Admin;
