import { Button, Tag } from "antd";
import CustomTable from "./components/CustomTable";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const columns = [
  {
    title: "UserName",
    dataIndex: "userName",
    key: "userName",
  },
  {
    title: "Email",
    dataIndex: "email",
    key: "email",
  },
  {
    title: "Role",
    dataIndex: "role",
    key: "role",
    render: (_, { role }) => (
      <>
        <Tag
          color={
            role === "admin"
              ? "volcano"
              : role === "student"
              ? "geekblue"
              : "green"
          }
          key={role}
        >
          {role.toUpperCase()}
        </Tag>
      </>
    ),
  },
];

const Users = () => {
  const [data, setData] = useState([]);

  const getData = async () => {
    try {
      let res = await axios.get(
        "https://brawlers-017.onrender.com/api/v1/admin"
      );
      let { data } = res;

      const transformedData = data.map((project) => ({
        ...project,
        key: project._id,
        email: project.email,
      }));

      console.log(transformedData);
      setData(transformedData);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <div className="d-flex justify-content-between align-items-center">
        <h1>User</h1>
        <Button>
          <Link to={"/admin/dashboard/newUser"}>Create New Student</Link>
        </Button>
      </div>

      <div className="mt-3">
        <CustomTable columns={columns} data={data} />
      </div>
    </>
  );
};

export default Users;
