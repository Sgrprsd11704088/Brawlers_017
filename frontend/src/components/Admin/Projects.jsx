import { useEffect, useState } from "react";
import CustomTable from "./components/CustomTable";
import axios from "axios";
import { Button } from "antd";
import { Link } from "react-router-dom";
import Loading from "./components/Loading";

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
  const [loading, setLoading] = useState(false);

  const fetchProjects = async () => {
    setLoading(true);
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
      setLoading(false);
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

      {loading && (
        <div className="d-flex justify-content-center align-items-center">
          <Loading />
        </div>
      )}
      {!loading && (
        <div className="mt-3">
          <CustomTable columns={columns} data={data} expand={true} />
        </div>
      )}
    </>
  );
};

export default Projects;
