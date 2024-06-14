import { Route, Routes } from "react-router-dom";
import Home from "../components/Admin/Home";
import Users from "../components/Admin/Users";
import Doners from "../components/Admin/Doners";
import Donations from "../components/Admin/Donations";

const diffContent = [
  { id: 1, amount: 40, title: "Students" },
  { id: 1, amount: 80, title: "Projects" },
  { id: 2, amount: 400, title: "Doners" },
  { id: 3, amount: 50, title: "Donations" },
];

const Admin = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home diffContent={diffContent} />} />
        <Route path="/users" element={<Users />} />
        <Route path="/doners" element={<Doners />} />
        <Route path="/donations" element={<Donations />} />
      </Routes>
    </div>
  );
};

export default Admin;
