import { useEffect, useState } from "react";
import CustomTable from "./components/CustomTable";
import axios from "axios";
import Loading from "./components/Loading";

const columns = [
  {
    title: "Donor",
    dataIndex: "donor",
    key: "donor",
  },
  {
    title: "Company Name",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Amount",
    dataIndex: "amount",
    key: "amount",
  },
  {
    title: "Donated At",
    dataIndex: "date",
    key: "date",
  },
];

const Donations = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const dateAndTime = (isoDate) => {
    const date = new Date(isoDate);
    const formattedDateTime = date.toLocaleString();
    return formattedDateTime;
  };

  const fetchProjects = async () => {
    setLoading(true);
    try {
      let res = await axios.get(
        "https://brawlers-017.onrender.com/api/donations"
      );
      const { data } = res;

      const transformedData = data.map((dono) => ({
        ...dono,
        key: dono._id,
        date: dateAndTime(dono.date),
      }));

      setData(transformedData);
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
      <h1>Donations</h1>

      {loading && (
        <div className="d-flex justify-content-center align-items-center">
          <Loading />
        </div>
      )}
      {!loading && (
        <div className="mt-3">
          <CustomTable columns={columns} data={data} />
        </div>
      )}
    </>
  );
};

export default Donations;
