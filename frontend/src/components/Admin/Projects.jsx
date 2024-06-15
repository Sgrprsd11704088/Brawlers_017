import { useEffect, useState } from "react";
import CustomTable from "./components/CustomTable";
import axios from "axios";
import { Button } from "antd";
import { Link } from "react-router-dom";

const columns = [
  {
    title: "Title",
    dataIndex: "title",
    key: "title",
  },
  {
    title: "Category",
    dataIndex: "category",
    key: "category",
  },
  {
    title: "Goal Amount",
    dataIndex: "goalAmount",
    key: "goalAmount",
  },
  {
    title: "Current Amount",
    dataIndex: "currentAmount",
    key: "currentAmount",
  },
];

const Projects = () => {
  const [data, setProjects] = useState([]);

  const fetchProjects = async () => {
    try {
      let res = await axios.get(
        "https://brawlers-017.onrender.com/api/projects"
      );
      const { data } = res;

      const transformedData = data.map((project) => ({
        ...project,
        key: project._id,
      }));

      setProjects(transformedData);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  return (
    <>
      <div className="d-flex justify-content-between align-items-center">
        <h1>Projects</h1>
        <Button>
          <Link to={"/admin/dashboard/newProject"}>Create New Project</Link>
        </Button>
      </div>
      <div className="mt-3">
        <CustomTable columns={columns} data={data} expand={true} />
      </div>
    </>
  );
};

export default Projects;
