import { Route, Routes } from "react-router-dom";
import Home from "../components/Admin/Home";
import Users from "../components/Admin/Users";
import Doners from "../components/Admin/Doners";
import Donations from "../components/Admin/Donations";
import Projects from "../components/Admin/Projects";

const diffContent = [
  { id: 1, amount: 40, title: "Students" },
  { id: 1, amount: 80, title: "Projects" },
  { id: 2, amount: 400, title: "Doners" },
  { id: 3, amount: 50, title: "Donations" },
];

const columns = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Age",
    dataIndex: "age",
    key: "age",
  },
  {
    title: "Address",
    dataIndex: "address",
    key: "address",
  },
];

const data = [
  {
    key: 1,
    name: "John Brown",
    age: 32,
    address: "New York No. 1 Lake Park",
    description: "Project IDS",
  },
  {
    key: 2,
    name: "Jim Green",
    age: 42,
    address: "London No. 1 Lake Park",
    description: "Project IDS",
  },
  {
    key: 4,
    name: "Joe Black",
    age: 32,
    address: "Sydney No. 1 Lake Park",
    description: "Project IDS",
  },
];

const Admin = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home diffContent={diffContent} />} />
        <Route
          path="/students"
          element={<Users columns={columns} data={data} />}
        />
        <Route path="/projects" element={<Projects />} />
        <Route
          path="/doners"
          element={<Doners columns={columns} data={data} />}
          data={data}
        />
        <Route path="/donations" element={<Donations />} />
      </Routes>
    </div>
  );
};

export default Admin;
