import { useEffect, useState } from "react";
import CustomTable from "./components/CustomTable";
import axios from "axios";

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
      let res = await axios.get("http://localhost:8080/api/projects");
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
      <h1>Projects</h1>
      <div className="mt-3">
        <CustomTable columns={columns} data={data} />
      </div>
    </>
  );
};

export default Projects;
